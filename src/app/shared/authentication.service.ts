import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User;

  userData: Observable<firebase.User>;

  //Cosntructor del usuario de firebase
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     console.log("hello")
    //     this.user = user;
    //     localStorage.setItem('user', JSON.stringify(this.user));
    //   } else {
    //     localStorage.setItem('user', null);
    //   }
    // })
  }

  /* Sign in */
  async login(email: string, password: string) {
    console.log("hello")
    var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password).then((value) => {
      console.log(value)
        localStorage.setItem('user', JSON.stringify(value.user));
        this.router.navigate(['/home']);
        data => console.log(data);
      }
    )
  }

  //retorna booleano si esta logeado
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    if(user !== null){
      return true;
    }
    else{
      this.router.navigate(["servicios"])
    }
    console.log(user)
    return user !== null;
  }
}
