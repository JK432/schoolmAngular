import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UNavComponent } from '../u-nav/u-nav.component';
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css'],

})
export class StudentdetailsComponent {
  data:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get('https://your-api-endpoint.com/data').subscribe(
    //   (response) => {
    //       this.data = response;
    //   },
    //   (error) => {
    //     console.error('Request failed:', error);
    //   }
    // );
  }

}
