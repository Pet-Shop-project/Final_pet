import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalDogEditComponent } from './normal-dog-edit.component';

describe('NormalDogEditComponent', () => {
  let component: NormalDogEditComponent;
  let fixture: ComponentFixture<NormalDogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalDogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalDogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
