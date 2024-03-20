import { Component, OnInit } from '@angular/core';
import { CoursesService } from './../../services/courses/courses.service'; // Import CoursesService
import { Icourse } from '../../interfaces/course';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [TableModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses: Icourse[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getallCourses().subscribe((data) => {
      this.courses = data;
      console.log(this.courses);
    });
  }

  deleteCourse(_id: string) {
   console.log('deleteCourse', _id);
  }

  editCourse(_id: string) {
    console.log('editCourse', _id);
  }
}
