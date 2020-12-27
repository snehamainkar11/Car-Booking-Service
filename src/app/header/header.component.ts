import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toService(){
    document.getElementById("services").scrollIntoView();
  }
  toCar(){
    document.getElementById("team").scrollIntoView();
  }
  
  toprice(){
    document.getElementById("pricing").scrollIntoView();
  }
  toContact(){
    document.getElementById("contact").scrollIntoView();
  }
}
