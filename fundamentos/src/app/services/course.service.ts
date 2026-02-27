import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  private courses: Course[] = [];

  getCourses(): Course[] {
    return this.courses;
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter(c => c.courseId !== id);
  }

  toggleStatus(id: number): void {
    const course = this.courses.find(c => c.courseId === id);
    if (course) {
      course.courseStatus = !course.courseStatus;
    }
  }
}
