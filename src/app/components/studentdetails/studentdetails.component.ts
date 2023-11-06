import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css'],
})

export class StudentdetailsComponent {

  user: User;
  userId:number=-1;

  constructor(private route: ActivatedRoute, private authenticationService:AuthenticationService) {
    this.user = this.authenticationService.getudata();
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }
}
