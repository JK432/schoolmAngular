import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmarkpanelComponent } from './smarkpanel.component';

describe('SmarkpanelComponent', () => {
  let component: SmarkpanelComponent;
  let fixture: ComponentFixture<SmarkpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmarkpanelComponent]
    });
    fixture = TestBed.createComponent(SmarkpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
