import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsAdminAddformComponent } from './birds-admin-addform.component';

describe('BirdsAdminAddformComponent', () => {
  let component: BirdsAdminAddformComponent;
  let fixture: ComponentFixture<BirdsAdminAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsAdminAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsAdminAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
