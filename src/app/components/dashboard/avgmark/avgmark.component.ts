import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-avgmark',
  templateUrl: './avgmark.component.html',
  styleUrls: ['./avgmark.component.css']
})
export class AvgmarkComponent {
  markData: any = [];
  @Input() subid:any;
  constructor(private http: HttpClient,) { }

  @Output() dataEmitter: EventEmitter<string> = new EventEmitter();

  sendDataToParent() {
    this.dataEmitter.emit('Data from child component');
  }

  ngOnInit() {

    this.fetchData();
  }




  fetchData() {

    this.http.get(environment.apiUrl + '/mark/?subject='+this.subid )
      .subscribe((data) => {
        // this.jsonData = JSON.parse(data);
        this.markData = data;
        for (let i = 0; i < this.markData.length; i++) {

        }
        console.log(this.markData.length);
        console.log(data);

        // Handle the response data

      }, (error) => {
        // Handle any errors

      });
  }

  getRandomColorPairClass() {

    const classNames = ['l-bg-cyan', 'l-bg-green', 'l-bg-orange',]; // Add class names for all color pairs
    const randomIndex = Math.floor(Math.random() * classNames.length);
    return 'l-bg-green';
  }
}
