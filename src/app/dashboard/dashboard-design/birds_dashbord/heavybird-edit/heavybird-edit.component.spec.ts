import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavybirdEditComponent } from './heavybird-edit.component';

describe('HeavybirdEditComponent', () => {
  let component: HeavybirdEditComponent;
  let fixture: ComponentFixture<HeavybirdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavybirdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavybirdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
