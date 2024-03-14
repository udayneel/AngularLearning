import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomevipComponent } from './welcomevip.component';

describe('WelcomevipComponent', () => {
  let component: WelcomevipComponent;
  let fixture: ComponentFixture<WelcomevipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomevipComponent]
    });
    fixture = TestBed.createComponent(WelcomevipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
