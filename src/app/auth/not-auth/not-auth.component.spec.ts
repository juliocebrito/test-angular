import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthComponent } from './not-auth.component';

describe('NotAuthComponent', () => {
  let component: NotAuthComponent;
  let fixture: ComponentFixture<NotAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});