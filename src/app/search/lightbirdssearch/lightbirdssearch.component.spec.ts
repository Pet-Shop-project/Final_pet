import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightbirdssearchComponent } from './lightbirdssearch.component';

describe('LightbirdssearchComponent', () => {
  let component: LightbirdssearchComponent;
  let fixture: ComponentFixture<LightbirdssearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightbirdssearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightbirdssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
