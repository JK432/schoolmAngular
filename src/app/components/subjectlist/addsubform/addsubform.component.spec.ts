import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubformComponent } from './addsubform.component';

describe('AddsubformComponent', () => {
  let component: AddsubformComponent;
  let fixture: ComponentFixture<AddsubformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsubformComponent]
    });
    fixture = TestBed.createComponent(AddsubformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
