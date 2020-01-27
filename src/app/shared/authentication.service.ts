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

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  /* Sign in */
  async login(email: string, password: string) {
    var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
        this.router.navigate(['/home']);
        data => console.log(data);
      }
    )
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    return user !== null;
  }
}
