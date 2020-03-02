import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavybirdssearchComponent } from './heavybirdssearch.component';

describe('HeavybirdssearchComponent', () => {
  let component: HeavybirdssearchComponent;
  let fixture: ComponentFixture<HeavybirdssearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavybirdssearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavybirdssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
