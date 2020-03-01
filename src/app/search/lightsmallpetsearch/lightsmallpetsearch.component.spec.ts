import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsmallpetsearchComponent } from './lightsmallpetsearch.component';

describe('LightsmallpetsearchComponent', () => {
  let component: LightsmallpetsearchComponent;
  let fixture: ComponentFixture<LightsmallpetsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightsmallpetsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightsmallpetsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
