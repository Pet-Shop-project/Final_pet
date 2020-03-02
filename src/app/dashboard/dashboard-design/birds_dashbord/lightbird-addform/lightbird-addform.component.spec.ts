import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightbirdAddformComponent } from './lightbird-addform.component';

describe('LightbirdAddformComponent', () => {
  let component: LightbirdAddformComponent;
  let fixture: ComponentFixture<LightbirdAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightbirdAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightbirdAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
