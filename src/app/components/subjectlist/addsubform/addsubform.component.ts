import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogserviceService } from 'src/app/services/dialogservice.service';
import { Subject } from 'src/app/interfaces/subject';

@Component({
  selector: 'app-addsubform',
  templateUrl: './addsubform.component.html',
  styleUrls: ['./addsubform.component.css']
})


export class AddsubformComponent {

  subformgroup: FormGroup;

  constructor(public dialog: MatDialog, public ddata: DialogserviceService, private formBuilder: FormBuilder, private http: HttpClient) {

    this.subformgroup = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }


  onSubmit() {

    let newSubject: Subject = { id: -1, name: this.subformgroup.get('name')!.value };

    this.http.post<Subject>(environment.apiUrl + '/subject/', newSubject)
      .subscribe({
        next: (data) => {
          this.dialog.closeAll()
          location.reload();
        }, error: (error) => { }
      });
  }
}
