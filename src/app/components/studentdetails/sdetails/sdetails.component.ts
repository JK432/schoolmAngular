import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DialogserviceService } from 'src/app/services/dialogservice.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-sdetails',
  templateUrl: './sdetails.component.html',
  styleUrls: ['./sdetails.component.css']
})


export class SdetailsComponent {
  student: User;
  user: User;

  @Input() id: any;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService, private dialogservice: DialogserviceService) {
    this.student = { id: -1, email: "", first_name: "", last_name: "", role: 1,latitude:0.0,longitude:0.0 };
    this.user = { id: -1, email: "", first_name: "", last_name: "", role: 1, latitude: 0.0, longitude: 0.0 }
  }

  ngOnInit() {
    this.user = this.authenticationService.getudata();
    if (this.user.role == 1) {
      this.student = this.user;
    } else {
      this.fetchData(this.id);
    }
  }

  fetchData(id: number) {
    this.http.get<User>(environment.apiUrl + '/register/' + id + '/')
      .subscribe({
        next: (data) => {
          this.student = data;
        }, error: (error) => {}
      });
  }
}


