import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
numbers = []
  constructor() { }

  ngOnInit() {
	  for(let i=1; i<300; i++){
		  this.numbers.push(i);
	  }
  }

}
