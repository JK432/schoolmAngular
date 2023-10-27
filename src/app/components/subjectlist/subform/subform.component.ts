import { Component,Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogserviceService } from 'src/app/services/dialogservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-subform',
  templateUrl: './subform.component.html',
  styleUrls: ['./subform.component.css']
})
export class SubformComponent {
  sdata:any;
  subformgroup: FormGroup;

  constructor(public dialog: MatDialog, public ddata: DialogserviceService, private formBuilder: FormBuilder,private http:HttpClient) {

    this.subformgroup = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }



  ngOnInit() {

    this.getdata();
  }
  getdata(){
    this.sdata = this.ddata.data
  }
onSubmit(){


  this.http.put(environment.apiUrl + '/subject/' + this.sdata.id+'/', {
    "id": this.sdata.id,
    "name": this.subformgroup.get('name')!.value
  })
    .subscribe((data) => {
      this.dialog.closeAll()
      location.reload();
    }, (error) => {

    });

}
}

