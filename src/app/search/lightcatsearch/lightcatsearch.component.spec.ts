import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightcatsearchComponent } from './lightcatsearch.component';

describe('LightcatsearchComponent', () => {
  let component: LightcatsearchComponent;
  let fixture: ComponentFixture<LightcatsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightcatsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightcatsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
