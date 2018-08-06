import { Component, OnInit } from '@angular/core';

import { DataStudentService } from '../data-student.service';
import { Student } from '../shared/student';
import { Student_ece } from '../shared/student_ece';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, Branches } from '../shared/feedback';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  feedbackForm : FormGroup;
  feedback: Feedback;

  constructor(private data : DataStudentService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.results = null;
    this.results_ece = null;
  }

  branches = Branches;

  createForm() {
    this.feedbackForm = this.fb.group({rollNo : '', branch : ''});
  }

  results : Student;
  results_ece : Student_ece;

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log("You entered : ", this.feedback.rollNo);
    console.log("Your branch : ", this.feedback.branch);
    this.feedbackForm.reset();

    if(this.feedback.branch == "ECEN"){
      this.results = null;
      console.log(this.feedback);
      this.anotherOne_ece(this.feedback.rollNo);
    }
    else {
      this.results_ece = null;
      this.anotherOne(this.feedback.rollNo);
    }

  }

  anotherOne(rno : string) {
    this.results = this.data.getResults(rno);
    console.log('resuls mein ye hai : ', this.results);
  }

  anotherOne_ece(rno : string) {
    this.results_ece = this.data.getResults_ece(rno);
    console.log('resuls mein ye hai : ', this.results_ece);
  }

}