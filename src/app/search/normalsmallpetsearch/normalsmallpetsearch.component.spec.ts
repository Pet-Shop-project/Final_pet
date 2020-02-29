import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalsmallpetsearchComponent } from './normalsmallpetsearch.component';

describe('NormalsmallpetsearchComponent', () => {
  let component: NormalsmallpetsearchComponent;
  let fixture: ComponentFixture<NormalsmallpetsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalsmallpetsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalsmallpetsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
