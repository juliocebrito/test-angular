import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesDeleteComponent } from './profiles-delete.component';

describe('ProfilesDeleteComponent', () => {
  let component: ProfilesDeleteComponent;
  let fixture: ComponentFixture<ProfilesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
