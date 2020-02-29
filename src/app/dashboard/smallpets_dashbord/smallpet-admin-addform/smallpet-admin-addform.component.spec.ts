import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallpetAdminAddformComponent } from './smallpet-admin-addform.component';

describe('SmallpetAdminAddformComponent', () => {
  let component: SmallpetAdminAddformComponent;
  let fixture: ComponentFixture<SmallpetAdminAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallpetAdminAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallpetAdminAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
