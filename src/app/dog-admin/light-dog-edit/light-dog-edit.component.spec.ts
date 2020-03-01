import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDogEditComponent } from './light-dog-edit.component';

describe('LightDogEditComponent', () => {
  let component: LightDogEditComponent;
  let fixture: ComponentFixture<LightDogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightDogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightDogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
