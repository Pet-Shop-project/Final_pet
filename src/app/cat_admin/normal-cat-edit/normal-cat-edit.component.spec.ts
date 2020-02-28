import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCatEditComponent } from './normal-cat-edit.component';

describe('NormalCatEditComponent', () => {
  let component: NormalCatEditComponent;
  let fixture: ComponentFixture<NormalCatEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalCatEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalCatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
