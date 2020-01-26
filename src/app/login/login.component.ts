import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  ngOnInit() {
  }

  constructor(private  authService: AuthenticationService) {}

  login(){
    console.log(this.email)
    console.log(this.password)
    this.authService.login(this.email, this.password);
  }


}
