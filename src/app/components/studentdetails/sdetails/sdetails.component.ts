import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-sdetails',
  templateUrl: './sdetails.component.html',
  styleUrls: ['./sdetails.component.css']
})
export class SdetailsComponent {
  jsonData: any = [];
  userData: any = [];
  constructor(private http: HttpClient, private authenticationService: AuthenticationService,) { }
  ngOnInit() {
    this.userData = this.authenticationService.getudata();
    if (this.userData.role == 1) {
      this.fetchData(this.userData.email);
    } else {

    }

  }
  fetchData(email:string) {

    this.http.get(environment.apiUrl + '/register/' + '?email=' + email)
      .subscribe((data) => {
        this.jsonData = data;
      }, (error) => {
      });
  }


  getRandomColorPairClass() {

    const classNames = ['l-bg-cyan', 'l-bg-green', 'l-bg-orange',]; // Add class names for all color pairs
    const randomIndex = Math.floor(Math.random() * classNames.length);
    return classNames[randomIndex];
  }
}
