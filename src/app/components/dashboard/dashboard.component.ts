import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  dataFromChild: number = 0;

  receiveDataFromChild(data: number) {
    this.dataFromChild = data;
    console.log(this.dataFromChild);
  }

  subData: any = [];
  userData: any = [];
  constructor(private http: HttpClient, private authenticationService: AuthenticationService,) { }
  ngOnInit() {

      this.fetchData();
  }
  fetchData() {

    this.http.get(environment.apiUrl + '/subject/')
      .subscribe((data) => {
        this.subData = data;
        console.log(data);

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
