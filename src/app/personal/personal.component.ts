import { Component, OnInit } from '@angular/core';

import { DataStudentService } from '../data-student.service';
import { Student } from '../shared/student';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback } from '../shared/feedback';


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
  }

  createForm() {
    this.feedbackForm = this.fb.group({rollNo : ''});
  }

  results : Student;

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log("You entered : ", this.feedback.rollNo);
    this.feedbackForm.reset();

    this.anotherOne(this.feedback.rollNo);
  }

  anotherOne(rno : string) {
    this.results = this.data.getResults(rno);
    console.log('resuls mein ye hai : ', this.results);
  }

}
