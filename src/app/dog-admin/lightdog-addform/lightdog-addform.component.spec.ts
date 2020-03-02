import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightdogAddformComponent } from './lightdog-addform.component';

describe('LightdogAddformComponent', () => {
  let component: LightdogAddformComponent;
  let fixture: ComponentFixture<LightdogAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightdogAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightdogAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
