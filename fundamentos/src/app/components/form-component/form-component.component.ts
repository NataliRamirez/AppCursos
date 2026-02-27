import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})
export class FormComponentComponent {
name: string = '';
  duration: number = 0;
  level: string = 'Básico';
  status: boolean = true;

  constructor(private courseService: CourseService) {}

  addCourse() {

    if (this.name.trim() === '' || this.duration <= 0) {
      return;
    }

    this.courseService.addCourse({
      courseId: Date.now(),
      courseName: this.name,
      courseDuration: this.duration,
      courseLevel: this.level,
      courseStatus: this.status
    });

    this.name = '';
    this.duration = 0;
    this.level = 'Básico';
    this.status = true;
  }
}
