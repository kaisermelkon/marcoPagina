import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private  authService: AuthenticationService) {}

  //Llama el servicio de login 
  login(form){
    console.log(form)
    this.authService.login(form.form.value.user, form.form.value.password);
  }


}
