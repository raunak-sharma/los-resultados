import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material'

import { Student } from '../shared/student';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent implements OnInit {

  student : Student;
  constructor(
    @Inject( MAT_DIALOG_DATA ) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data.datas);
    this.student = this.data.datas;
  }

}
