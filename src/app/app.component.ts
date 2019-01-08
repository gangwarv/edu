import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  displayHeadAndFooter = true;
  subscription: Subscription;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnDestroy() {
    this.subscription = this.auth.User.subscribe(u => console.log(u));
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.displayHeadAndFooter = !(event.url.endsWith('signup') || event.url.endsWith('signin'));
      }
    });
  }
}
