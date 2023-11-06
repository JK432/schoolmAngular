import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DialogserviceService } from 'src/app/services/dialogservice.service';
import { Mark } from 'src/app/interfaces/mark';
import { User } from 'src/app/interfaces/user';
import { Subject } from 'src/app/interfaces/subject';

@Component({
  selector: 'app-smarkpanel',
  templateUrl: './smarkpanel.component.html',
  styleUrls: ['./smarkpanel.component.css']
})


export class SmarkpanelComponent {

  marks: Mark[] = [];
  user: User;
  subjects: Subject[] = [];

  @Input() id: number = -1;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService, private dialogService: DialogserviceService) {
    this.user = this.authenticationService.getudata();
  }

  ngOnInit() {
    if (this.user.role == 1) {
      this.getMarks(this.user.id);
    } else {
      this.getMarks(this.id);
    }
    this.getSubjects();
  }

  getMarks(id: number) {
    let url: string = environment.apiUrl + '/mark/?student=' + id;
    this.http.get<Mark[]>(url)
      .subscribe({
        next: (data) => {
          this.marks = data;
        }, error: (error) => { }
      });
  }

  getSubjects() {
    let url: string = environment.apiUrl + '/subject/'
    this.http.get<Subject[]>(url)
      .subscribe({
        next: (data) => {
          this.subjects = data;
        }, error: (error) => { }
      });
  }

  openDialog(mark: Mark) {
    this.dialogService.openEditmarkDialog(mark, this.subjects);
  }
}
