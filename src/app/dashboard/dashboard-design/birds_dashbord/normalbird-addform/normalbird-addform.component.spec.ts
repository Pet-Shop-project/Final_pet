import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalbirdAddformComponent } from './normalbird-addform.component';

describe('NormalbirdAddformComponent', () => {
  let component: NormalbirdAddformComponent;
  let fixture: ComponentFixture<NormalbirdAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalbirdAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalbirdAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
