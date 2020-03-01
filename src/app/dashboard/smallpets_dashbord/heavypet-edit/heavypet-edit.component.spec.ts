import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavypetEditComponent } from './heavypet-edit.component';

describe('HeavypetEditComponent', () => {
  let component: HeavypetEditComponent;
  let fixture: ComponentFixture<HeavypetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavypetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavypetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
