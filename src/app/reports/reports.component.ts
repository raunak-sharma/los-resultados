import { Component, OnInit } from '@angular/core';

import { DataStudentService } from '../data-student.service';
import { Student } from '../shared/student';

import { MatDialog, MatDialogRef } from '@angular/material';
import { ResultViewComponent } from '../result-view/result-view.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})

export class ReportsComponent implements OnInit {

  students : Student[];

  constructor(private data : DataStudentService, public dialog : MatDialog) { }

  ngOnInit() {
    this.students = this.data.getStudentsYGPA2();
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

  openDialog(student : Student) {
    this.dialog.open(ResultViewComponent, { width : '75%', height : '800px', data : { datas : student } });
  }

}
