import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User: Observable<User>;

  constructor(private fbAuth: AngularFireAuth, private router:Router) {
    this.User = fbAuth.authState;
  }

  signInWithEmailAndPassword(email: string, password: string) {
    this.fbAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigateByUrl('/home');
        console.log('logged in successfully');
      })
      .catch((err) => console.log(err));
  }
  signOut() {
    this.fbAuth.auth.signOut()
    .then(()=>{
      this.router.navigateByUrl('/signup');
    });
  }
}
