import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})


export class StudentlistComponent {

  students: User[] = [];
  user: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<User[]>(environment.apiUrl + '/register/')
      .subscribe({
        next: (data) => {
          this.students = data;
        }, error: (error) => { }
      });
    }
}

