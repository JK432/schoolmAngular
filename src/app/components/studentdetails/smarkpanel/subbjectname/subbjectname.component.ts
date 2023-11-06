import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'src/app/interfaces/subject';

@Component({
  selector: 'app-subbjectname',
  templateUrl: './subbjectname.component.html',
  styleUrls: ['./subbjectname.component.css']
})


export class SubbjectnameComponent {

  subject: Subject;

  @Input() subjectId: number;

  constructor(private http: HttpClient) {
    this.subject = { id: -1, name: "" }
    this.subjectId=-1;
  }

  ngOnInit() {
    this.getsubname();
  }

  getsubname() {
    let url: string = environment.apiUrl + '/subject/' + this.subjectId + '/'
    this.http.get<Subject>(url).subscribe({
      next: (data) => {
        this.subject = data;
      }, error: (error) => {}
    });
  }
}
