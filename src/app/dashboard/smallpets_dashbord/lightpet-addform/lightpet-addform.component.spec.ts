import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightpetAddformComponent } from './lightpet-addform.component';

describe('LightpetAddformComponent', () => {
  let component: LightpetAddformComponent;
  let fixture: ComponentFixture<LightpetAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightpetAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightpetAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
