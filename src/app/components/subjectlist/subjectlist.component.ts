
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DialogserviceService } from 'src/app/services/dialogservice.service';
@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectlistComponent {

  dataFromChild: number = 0;

  receiveDataFromChild(data: number) {
    this.dataFromChild = data;
    console.log(this.dataFromChild);
  }

  subData: any = [];
  userData: any = [];
  constructor(private http: HttpClient, private dialogService: DialogserviceService) { }
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {

    this.http.get(environment.apiUrl + '/subject/')
      .subscribe((data) => {
        this.subData = data;
      }, (error) => {

      });
  }

  getRandomColorPairClass() {
    console.log(this.dataFromChild);
    const classNames = ['l-bg-cyan', 'l-bg-green', 'l-bg-orange',]; // Add class names for all color pairs
    const randomIndex = Math.floor(Math.random() * classNames.length);
    return 'l-bg-green';
  }


  openDialog(sdata:any) {
    this.dialogService.openSubformDialog(sdata);
  }

addSubform(){

  this.dialogService.openaddSubformDialog();
}

}
