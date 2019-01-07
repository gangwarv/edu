import { Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();

    constructor() {console.log(window.location.href.endsWith('signup'), 'cons') }

    ngOnInit() {
        // console.log(window.location.href.endsWith('signup'))
    }
}
