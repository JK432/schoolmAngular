import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {

  dataFromChild: number = 0;

  receiveDataFromChild(data: number) {
    this.dataFromChild = data;
    console.log(this.dataFromChild);
  }

  stuData: any = [];
  userData: any = [];
  constructor(private http: HttpClient) { }
  ngOnInit() {

    this.fetchData();
  }
  fetchData() {

    this.http.get(environment.apiUrl + '/register/')
      .subscribe((data) => {
        this.stuData = data;
      }, (error) => {

      });
  }

  getRandomColorPairClass() {
    console.log(this.dataFromChild);
    const classNames = ['l-bg-cyan', 'l-bg-green', 'l-bg-orange',]; // Add class names for all color pairs
    const randomIndex = Math.floor(Math.random() * classNames.length);
    return 'l-bg-green';
  }
}
