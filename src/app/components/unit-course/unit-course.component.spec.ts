import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitCourseComponent } from './unit-course.component';

describe('UnitCourseComponent', () => {
  let component: UnitCourseComponent;
  let fixture: ComponentFixture<UnitCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitCourseComponent]
    });
    fixture = TestBed.createComponent(UnitCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
