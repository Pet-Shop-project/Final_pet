import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalbirdssearchComponent } from './normalbirdssearch.component';

describe('NormalbirdssearchComponent', () => {
  let component: NormalbirdssearchComponent;
  let fixture: ComponentFixture<NormalbirdssearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalbirdssearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalbirdssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
