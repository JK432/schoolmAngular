import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-u-nav',
  templateUrl: './u-nav.component.html',
  styleUrls: ['./u-nav.component.css']
})

export class UNavComponent {
  constructor(private authenticationService:AuthenticationService){}
  public onLogout() {
    this.authenticationService.logout();
   }
}
