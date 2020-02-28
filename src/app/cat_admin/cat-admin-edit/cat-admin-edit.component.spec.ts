import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAdminEditComponent } from './cat-admin-edit.component';

describe('CatAdminEditComponent', () => {
  let component: CatAdminEditComponent;
  let fixture: ComponentFixture<CatAdminEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatAdminEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
