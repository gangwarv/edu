import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayHeadAndFooter = true;
  constructor(private router: Router) { }


  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.displayHeadAndFooter = !event.url.endsWith('signup') || !event.url.endsWith('signin');
      }
    });
  }
}
