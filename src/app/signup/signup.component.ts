import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    test: Date = new Date();
    email: string;
    password: string;

    constructor(private auth: AuthService) {

    }

    signIn() {
        this.auth.signInWithEmailAndPassword(this.email, this.password)
    }
}
