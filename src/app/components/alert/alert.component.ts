import { Component, Input } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  message: string = '';
  dispaly:string ='none'// Initialize the property

  constructor(private AlertService: AlertService) { }

  closeAlert() {
    this.message = '';
    this.dispaly='none'; // Clear the message to hide the alert
  }
}
