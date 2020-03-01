import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightpetEditComponent } from './lightpet-edit.component';

describe('LightpetEditComponent', () => {
  let component: LightpetEditComponent;
  let fixture: ComponentFixture<LightpetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightpetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightpetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
