import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubformComponent } from '../components/subjectlist/subform/subform.component';
import { AddsubformComponent } from '../components/subjectlist/addsubform/addsubform.component';
import { EditmarkComponent } from '../components/studentdetails/smarkpanel/editmark/editmark.component';
import { Subject } from '../interfaces/subject';
import { Mark } from '../interfaces/mark';

@Injectable({
  providedIn: 'root'
})


export class DialogserviceService {

  mark:Mark;
  subject:Subject;
  subjectList: Subject[]=[];

  constructor(private dialog: MatDialog) {
    this.subject={id:-1,name:""}
    this.mark = { id: -1, mark: -1, student: -1, subject: -1 }
  }

  openSubformDialog(subject:Subject) {
    this.subject = subject;
    this.dialog.open(SubformComponent);
  }

  openaddSubformDialog() {
    this.dialog.open(AddsubformComponent);
  }

  openEditmarkDialog(mark:Mark,subjectList:Subject[]) {
    this.mark=mark;
    this.subjectList=subjectList;
    this.dialog.open(EditmarkComponent);
  }
}
