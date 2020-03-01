import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavysmallpetsearchComponent } from './heavysmallpetsearch.component';

describe('HeavysmallpetsearchComponent', () => {
  let component: HeavysmallpetsearchComponent;
  let fixture: ComponentFixture<HeavysmallpetsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavysmallpetsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavysmallpetsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
