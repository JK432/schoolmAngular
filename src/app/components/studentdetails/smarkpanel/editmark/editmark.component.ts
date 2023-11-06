import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogserviceService } from 'src/app/services/dialogservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Mark } from 'src/app/interfaces/mark';
import { Subject } from 'src/app/interfaces/subject';

@Component({
  selector: 'app-editmark',
  templateUrl: './editmark.component.html',
  styleUrls: ['./editmark.component.css']
})


export class EditmarkComponent {

  mark: Mark;
  subjects: Subject[] = []
  formgroup: FormGroup;

  constructor(public dialog: MatDialog, public dialogService: DialogserviceService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.mark = this.dialogService.mark;
    this.subjects = this.dialogService.subjectList;
    this.formgroup = this.formBuilder.group({
      mark: [this.mark.mark, Validators.required],
      subject: [this.mark.subject, Validators.required],
    });
  }

  onSubmit() {

    let newMark:Mark = {
      id: this.mark.id,
      mark: this.formgroup.get('mark')!.value,
      subject: this.formgroup.get('subject')!.value,
      student: this.mark.student,
    };

    this.http.put<Mark>(environment.apiUrl + '/mark/' + this.mark.id + '/',
      newMark
    ).subscribe({
      next: (data) => {
        this.dialog.closeAll()
        location.reload();
      }, error: (error) => {}
    });
  }
}
