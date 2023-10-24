import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-smarkpanel',
  templateUrl: './smarkpanel.component.html',
  styleUrls: ['./smarkpanel.component.css']
})
export class SmarkpanelComponent {
  jsonData:any =[];
  userData: any = [];
  subjectData:any=[];
  constructor(private http: HttpClient, private authenticationService: AuthenticationService,) { }
  ngOnInit() {
    this.userData = this.authenticationService.getudata();
    console.log(this.userData.role)
    if(this.userData.role==1){
      this.fetchData(this.userData.email);
    }else{

    }


  }
  fetchData(email:string) {
    let url:string = environment.apiUrl + '/mark/?email=' +email
    this.http.get(url)
      .subscribe((data) => {
        // this.jsonData = JSON.parse(data);
        this.jsonData=data;

        // Handle the response data

      }, (error) => {
        // Handle any errors

      });
  }

  getsubname(sub:any,id:number){
    let url: string = environment.apiUrl + '/subject/' + sub +'/'
    this.http.get(url)
      .subscribe((data) => {
        // this.jsonData = JSON.parse(data);
        this.subjectData = data;
        console.log(data)
        // Handle the response data

      }, (error) => {
        // Handle any errors

      });
    return this.subjectData.name;

  }

  getRandomColorPairClass() {

    const classNames = ['l-bg-cyan', 'l-bg-green', 'l-bg-orange',]; // Add class names for all color pairs
    const randomIndex = Math.floor(Math.random() * classNames.length);
    return 'l-bg-green';
  }
}
