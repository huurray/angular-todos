import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxComponent } from './rx.component';

describe('RxComponent', () => {
  let component: RxComponent;
  let fixture: ComponentFixture<RxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
