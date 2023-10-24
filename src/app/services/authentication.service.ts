import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from '../clients/authentication.client';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  jsonData: any;
  private tokenKey = 'token';
  private udatakey = 'udata';


  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) { }

  public login(username: string, password: string): void {
    this.authenticationClient.login(username, password).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);
      this.getuserdata();
    });
  }
  public getuserdata(): void {

    this.authenticationClient.getuserdata().subscribe((data) => {
      this.jsonData = JSON.parse(data);
      localStorage.setItem(this.udatakey, JSON.stringify(this.jsonData[0]));
      if(this.jsonData[0].role==1){
        this.router.navigate(['/student']);
      }
      else if(this.jsonData[0].role == 0) {
        this.router.navigate(['/dash']);
      }
    });
  }


  public logout() {
    localStorage.removeItem(String(this.tokenKey));
    localStorage.removeItem(this.udatakey);
    localStorage.clear();

    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    console.log(localStorage.getItem(this.tokenKey))
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

  public getudata(): any | null {
    console.log(JSON.parse(localStorage.getItem(String(this.udatakey))!))
    console.log()
    return JSON.parse(localStorage.getItem(String(this.udatakey))!);
  }

}
