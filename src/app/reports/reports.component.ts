import { Component, OnInit } from '@angular/core';

import { DataStudentService } from '../data-student.service';
import { Student } from '../shared/student';
import { Student_ece } from '../shared/student_ece';

import { MatDialog, MatDialogRef } from '@angular/material';
import { ResultViewComponent } from '../result-view/result-view.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})

export class ReportsComponent implements OnInit {

  students : Student[];
  students_ece : Student_ece[];

  constructor(private data : DataStudentService, public dialog : MatDialog) {  }

  ngOnInit() {
    this.sgpa4Click();
    this.sgpa4Click_ece();
  }

  namerollClick() {
    this.students = this.data.getStudentsName();
  }

  sgpa4Click() {
    this.students = this.data.getStudentsSGPA4();
  }

  sgpa3Click() {
    this.students = this.data.getStudentsSGPA3();
  }

  ygpa2Click() {
    this.students = this.data.getStudentsYGPA2();
  }


  namerollClick_ece() {
    this.students_ece = this.data.getStudentsName_ece();
  }

  sgpa4Click_ece() {
    this.students_ece = this.data.getStudentsSGPA4_ece();
  }

  sgpa3Click_ece() {
    this.students_ece = this.data.getStudentsSGPA3_ece();
  }

  ygpa2Click_ece() {
    this.students_ece = this.data.getStudentsYGPA2_ece();
  }


  openDialog(student : Student) {
    console.log("PAsseD " + student.even);
    this.dialog.open(ResultViewComponent, { width : '75%', height : '800px', data : { datas : student } });
  }

}