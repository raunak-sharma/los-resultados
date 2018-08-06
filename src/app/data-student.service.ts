import { Injectable } from '@angular/core';

import { STUDENTS } from 'src/app/shared/students';
import { STUDENTS_ECE } from 'src/app/shared/students_ece';

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

  getResults(rno : string) {
    return STUDENTS.filter((data) => +data.roll == +rno)[0];
  }



  getStudentsYGPA2_ece() {
    return STUDENTS_ECE.sort((obj1, obj2) => +obj2.ygpa - +obj1.ygpa);
  }

  getStudentsSGPA3_ece() {
    return STUDENTS_ECE.sort((obj1, obj2) => +obj2.odd - +obj1.odd);
  }

  getStudentsSGPA4_ece() {
    return STUDENTS_ECE.sort((obj1, obj2) => +obj2.even - +obj1.even);
  }

  getStudentsName_ece() {
    return STUDENTS_ECE.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name));
  }

  getResults_ece(rno : string) {
    return STUDENTS_ECE.filter((data) => +data.roll == +rno)[0];
  }

}
