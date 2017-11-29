import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsDeleteComponent } from './permissions-delete.component';

describe('PermissionsDeleteComponent', () => {
  let component: PermissionsDeleteComponent;
  let fixture: ComponentFixture<PermissionsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
