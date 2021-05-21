import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// rxjs
import { Subscription, Observable, of, throwError } from 'rxjs';
import { map, catchError, debounceTime, switchMap } from 'rxjs/operators';

interface GithubUser {
  login: number;
  name: string;
}

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.scss'],
})
export class RxComponent implements OnInit, OnDestroy {
  searchInput: FormControl = new FormControl();
  githubUser: GithubUser | {} = {};
  subscription: Subscription = new Subscription();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.subscription = this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((id: string) => this.getGithubUser(id))
      )
      .subscribe({
        next: (user) => (this.githubUser = user),
        error: (error) => console.error(error),
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getGithubUser(id: string): Observable<GithubUser | string> {
    return this.http.get(`https://api.github.com/users/${id}`).pipe(
      map((user: any) => ({ login: user.login, name: user.name })),
      catchError((err) => {
        if (err.status === 404) {
          return of(`[ERROR] Not found user: ${id}`);
        } else {
          return throwError(err);
        }
      })
    );
  }
}
