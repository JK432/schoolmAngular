import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginformgroup: FormGroup; // Define the FormGroup

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
    this.loginformgroup = this.formBuilder.group({
      email: ['', Validators.required], // Add validators if needed
      password: ['', Validators.required] // Add validators if needed
    });
  }

  username: string = "";
  password: string = "";
  show: boolean = false;

  // onSubmit(): void {
  //   // Process checkout data here
  //   console.warn('Your order has been submitted', this.loginformgroup.value);
  //   this.loginformgroup.reset();
  // }

  public onSubmit() {
    this.authenticationService.login(
      this.loginformgroup.get('email')!.value,
      this.loginformgroup.get('password')!.value
    );


}
}
