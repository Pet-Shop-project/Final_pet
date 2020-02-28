import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyDogEditComponent } from './heavy-dog-edit.component';

describe('HeavyDogEditComponent', () => {
  let component: HeavyDogEditComponent;
  let fixture: ComponentFixture<HeavyDogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyDogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyDogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
