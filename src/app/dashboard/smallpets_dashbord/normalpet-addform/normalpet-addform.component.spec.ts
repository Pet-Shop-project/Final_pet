import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalpetAddformComponent } from './normalpet-addform.component';

describe('NormalpetAddformComponent', () => {
  let component: NormalpetAddformComponent;
  let fixture: ComponentFixture<NormalpetAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalpetAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalpetAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
