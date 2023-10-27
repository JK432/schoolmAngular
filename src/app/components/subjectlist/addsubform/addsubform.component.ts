import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogserviceService } from 'src/app/services/dialogservice.service';
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


    this.http.post(environment.apiUrl + '/subject/', {
      "name": this.subformgroup.get('name')!.value
    })
      .subscribe((data) => {
        this.dialog.closeAll()
        location.reload();
      }, (error) => {

      });

  }
}
