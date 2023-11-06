import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Mark } from 'src/app/interfaces/mark';


@Component({
  selector: 'app-avgmark',
  templateUrl: './avgmark.component.html',
  styleUrls: ['./avgmark.component.css']
})


export class AvgmarkComponent {
  marks: Mark[] = [];
  avg: number = 0;
  @Input() subId: number = -1;

  constructor(private http: HttpClient,) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<Mark[]>(environment.apiUrl + '/mark/?subject=' + this.subId)
      .subscribe({
        next: (data: Mark[]) => {
          this.marks = data;
          for (let i = 0; i < this.marks.length; i++) {
            this.avg = this.avg + this.marks[i].mark;
          }
          if (this.marks.length > 0) {
            this.avg = this.avg / this.marks.length;
          } else {
            this.avg = 0;
          }
        },
        error: (error) => {}
      });
  }

}
