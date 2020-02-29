import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalbirdEditComponent } from './normalbird-edit.component';

describe('NormalbirdEditComponent', () => {
  let component: NormalbirdEditComponent;
  let fixture: ComponentFixture<NormalbirdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalbirdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalbirdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
