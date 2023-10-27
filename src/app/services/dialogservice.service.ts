import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubformComponent } from '../components/subjectlist/subform/subform.component';
import { AddsubformComponent } from '../components/subjectlist/addsubform/addsubform.component';
@Injectable({
  providedIn: 'root'
})
export class DialogserviceService {
  data: any;


  constructor(private dialog: MatDialog) {}

  openSubformDialog(sdata:any) {
    this.data =sdata;
    this.dialog.open(SubformComponent);
  }
  openaddSubformDialog() {
    this.dialog.open(AddsubformComponent);
  }
}
