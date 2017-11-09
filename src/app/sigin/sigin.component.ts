import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
} from '@angular/material';
import { SiginDialogComponent } from '../sigin-dialog/sigin-dialog.component';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  siginDialog() {
    let dialogRef = this.dialog.open(SiginDialogComponent, {
      width: '450px',
    });
  }

}
