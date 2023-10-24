import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UNavComponent } from '../u-nav/u-nav.component';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css'],

})
export class StudentdetailsComponent {
  userData: any = [];
  data:any;
  id:any;
  constructor(private route: ActivatedRoute, private authenticationService:AuthenticationService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];

    });
  }

  ngOnInit() {
    this.userData = this.authenticationService.getudata();
    console.log(this.id)
    if (this.userData.role == 1) {
      // this.fetchData(this.userData.id);
    } else {

    }
  }

}
