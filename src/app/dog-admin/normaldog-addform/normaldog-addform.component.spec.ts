import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaldogAddformComponent } from './normaldog-addform.component';

describe('NormaldogAddformComponent', () => {
  let component: NormaldogAddformComponent;
  let fixture: ComponentFixture<NormaldogAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormaldogAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaldogAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
