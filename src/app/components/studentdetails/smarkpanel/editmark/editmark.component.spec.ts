import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmarkComponent } from './editmark.component';

describe('EditmarkComponent', () => {
  let component: EditmarkComponent;
  let fixture: ComponentFixture<EditmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditmarkComponent]
    });
    fixture = TestBed.createComponent(EditmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
