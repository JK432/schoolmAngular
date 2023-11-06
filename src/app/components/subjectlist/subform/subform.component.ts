import { Component, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogserviceService } from 'src/app/services/dialogservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'src/app/interfaces/subject';

@Component({
  selector: 'app-subform',
  templateUrl: './subform.component.html',
  styleUrls: ['./subform.component.css']
})


export class SubformComponent {

  subject: Subject;
  subformgroup: FormGroup;

  constructor(public dialog: MatDialog, public dialogService: DialogserviceService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.subject = this.dialogService.subject
    this.subformgroup = this.formBuilder.group({
      name: [this.dialogService.subject.name, Validators.required],
    });
  }


  onSubmit() {
    let newSubject: Subject = { id: this.subject.id, name: this.subformgroup.get('name')!.value }
    this.http.put(environment.apiUrl + '/subject/' + this.subject.id + '/', newSubject)
      .subscribe({
        next: (data) => {
          this.dialog.closeAll()
          location.reload();
        }, error: (error) => { }
      });
  }
}

