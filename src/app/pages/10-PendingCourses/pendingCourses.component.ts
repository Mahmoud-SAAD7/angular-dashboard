import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service'; // Import CoursesService
import { Icourse } from '../../interfaces/course';
import { TableModule } from 'primeng/table';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pendingCourses',
  standalone: true,
  imports: [TableModule, ReactiveFormsModule, FormsModule],
  templateUrl: './pendingCourses.component.html',
})
export class PendingCoursesComponent implements OnInit {
  public courses: Icourse[] = [];
  public filteredCourses: Icourse[] = [];
  public searchQuery: string = '';
  public notAcceptedCourses: Icourse[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
    // Fetch not accepted services
    this.coursesService.getNotAcceptedCourses().subscribe((data) => {
      this.coursesService.updateNotAcceptedCourses(data);
    });

    this.coursesService.notAcceptedCourses$.subscribe((updateCourse) => {
      this.notAcceptedCourses = updateCourse;
      this.filteredCourses = this.notAcceptedCourses; // Initialize filtered list
    });
  }

  getCourses(): void {
    this.coursesService.getNotAcceptedCourses().subscribe((data) => {
      this.courses = data;
      console.log(this.courses);
      this.filteredCourses = [...this.courses]; // Initialize filtered list
    });
  }

  filterCourses(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredCourses = [...this.courses];
    } else {
      this.filteredCourses = this.courses.filter((course) =>
        course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
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
    this.coursesService.deleteCourse(_id).subscribe((data) => {
      console.log(data);
      alert('Course deleted successfully');
    });
  }

  editCourse(_id: string) {
    console.log('editCourse', _id);
  }

  acceptCourse(_id: string) {
    console.log('acceptCourse', _id);
    this.coursesService.acceptCourse(_id).subscribe((data) => {
      // console.log(data);
      // alert('Course accepted successfully');
      // Update local services list
      const updatedCourses = this.notAcceptedCourses.filter(
        (course) => course._id !== _id
      );
      this.coursesService.updateNotAcceptedCourses(updatedCourses);
    });
  }

  // acceptService(id: string) {
  //   this.ServicesService.acceptService(id).subscribe((data) => {
  //     // Update local services list
  //     const updatedServices = this.notAcceptedServices.filter(
  //       (service) => service._id !== id
  //     );
  //     this.ServicesService.updateNotAcceptedServices(updatedServices);
  //   });
  // }
}
