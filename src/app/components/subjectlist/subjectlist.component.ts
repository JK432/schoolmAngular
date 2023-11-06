import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DialogserviceService } from 'src/app/services/dialogservice.service';
import { Subject } from 'src/app/interfaces/subject';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})


export class SubjectlistComponent {

  subjects: Subject[] = [];

  constructor(private http: HttpClient, private dialogService: DialogserviceService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<Subject[]>(environment.apiUrl + '/subject/')
      .subscribe({
        next: (data) => {
          this.subjects = data;
        }, error: (error) => { }
      });
    }

  openDialog(subject: Subject) {
     this.dialogService.openSubformDialog(subject);
  }

  addSubform() {
    this.dialogService.openaddSubformDialog();
  }

}
