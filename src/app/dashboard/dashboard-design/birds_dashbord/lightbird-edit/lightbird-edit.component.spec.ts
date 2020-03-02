import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightbirdEditComponent } from './lightbird-edit.component';

describe('LightbirdEditComponent', () => {
  let component: LightbirdEditComponent;
  let fixture: ComponentFixture<LightbirdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightbirdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightbirdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
