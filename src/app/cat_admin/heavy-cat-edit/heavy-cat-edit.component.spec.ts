import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyCatEditComponent } from './heavy-cat-edit.component';

describe('HeavyCatEditComponent', () => {
  let component: HeavyCatEditComponent;
  let fixture: ComponentFixture<HeavyCatEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyCatEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyCatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
