import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbjectnameComponent } from './subbjectname.component';

describe('SubbjectnameComponent', () => {
  let component: SubbjectnameComponent;
  let fixture: ComponentFixture<SubbjectnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubbjectnameComponent]
    });
    fixture = TestBed.createComponent(SubbjectnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
