import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  message = '';
  dispaly ='none'

  showMessage(message: string) {
    this.message = message;
    this.dispaly='flex';
  }

  hideMessage() {
    this.message = '';
    this.dispaly = 'none'
  }
}
