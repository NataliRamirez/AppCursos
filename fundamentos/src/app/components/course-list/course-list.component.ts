import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
constructor(private courseService: CourseService) {}

  get courses(): Course[] {
    return this.courseService.getCourses();
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id);
  }

  toggleStatus(id: number) {
    this.courseService.toggleStatus(id);
  }
}