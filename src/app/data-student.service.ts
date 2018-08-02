import { Injectable } from '@angular/core';

import { STUDENTS } from 'src/app/shared/students';

@Injectable({
  providedIn: 'root'
})
export class DataStudentService {

  constructor() { }

  getStudentsYGPA2() {
    return STUDENTS.sort((obj1, obj2) => +obj2.ygpa - +obj1.ygpa);
  }

  getStudentsSGPA3() {
    return STUDENTS.sort((obj1, obj2) => +obj2.odd - +obj1.odd);
  }

  getStudentsSGPA4() {
    return STUDENTS.sort((obj1, obj2) => +obj2.even - +obj1.even);
  }

  getStudentsName() {
    return STUDENTS.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name));
  }

}
