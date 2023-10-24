import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-subbjectname',
  templateUrl: './subbjectname.component.html',
  styleUrls: ['./subbjectname.component.css']
})
export class SubbjectnameComponent {
  constructor(private http: HttpClient){}
  @Input() data: any;
  subjectData: any = {};

  ngOnInit() {
    this.getsubname();


  }

  getsubname() {
    let url: string = environment.apiUrl + '/subject/' + this.data + '/'
    this.http.get(url)
      .subscribe((data) => {
        // this.jsonData = JSON.parse(data);
        this.subjectData = data;
        console.log(data)
        // Handle the response data

      }, (error) => {
        // Handle any errors

      });


  }
}
