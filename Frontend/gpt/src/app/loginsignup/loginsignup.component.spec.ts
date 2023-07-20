import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsignupComponent } from './loginsignup.component';

describe('LoginsignupComponent', () => {
  let component: LoginsignupComponent;
  let fixture: ComponentFixture<LoginsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginsignupComponent]
    });
    fixture = TestBed.createComponent(LoginsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
