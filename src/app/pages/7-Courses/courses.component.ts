import { Component, OnInit } from '@angular/core';
import { CoursesService } from './../../services/courses/courses.service'; // Import CoursesService
import { Icourse } from '../../interfaces/course';
import { TableModule } from 'primeng/table';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [TableModule, ReactiveFormsModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
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
  courseForm = new FormGroup({
    InstructorID: new FormControl('', [Validators.required]),
    Title: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Price: new FormControl('', [Validators.required]),
    CategoryID: new FormControl('', [Validators.required]),
    SubCategoryID: new FormControl('', [Validators.required]),
    CourseImg: new FormControl('', [Validators.required]),
    Duration: new FormControl('', [Validators.required]),
    CourseMaterial: new FormControl('', [Validators.required]),
  });
  onSubmit(courseForm: FormGroup) {
    const formValue = this.courseForm.value;
    if (
      formValue.InstructorID &&
      formValue.Title &&
      formValue.Description &&
      formValue.Price &&
      formValue.CategoryID &&
      formValue.SubCategoryID &&
      formValue.CourseImg &&
      formValue.Duration &&
      formValue.CourseMaterial
    ) {
      this.coursesService.createCourse(formValue).subscribe((data) => {
        console.log(data);
      });
      alert('Course added successfully');
    } else {
      alert('Please fill in all the required fields');
    }
  }

  deleteCourse(_id: string) {
    console.log('deleteCourse', _id);
  }

  editCourse(_id: string) {
    console.log('editCourse', _id);
  }

  acceptCourse(_id: string) {
    console.log('acceptCourse', _id);
  }
}
