import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalpetEditComponent } from './normalpet-edit.component';

describe('NormalpetEditComponent', () => {
  let component: NormalpetEditComponent;
  let fixture: ComponentFixture<NormalpetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalpetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalpetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
