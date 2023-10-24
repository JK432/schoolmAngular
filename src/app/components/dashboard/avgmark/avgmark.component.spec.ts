import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgmarkComponent } from './avgmark.component';

describe('AvgmarkComponent', () => {
  let component: AvgmarkComponent;
  let fixture: ComponentFixture<AvgmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvgmarkComponent]
    });
    fixture = TestBed.createComponent(AvgmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
