import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNavComponent } from './u-nav.component';

describe('UNavComponent', () => {
  let component: UNavComponent;
  let fixture: ComponentFixture<UNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UNavComponent]
    });
    fixture = TestBed.createComponent(UNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
