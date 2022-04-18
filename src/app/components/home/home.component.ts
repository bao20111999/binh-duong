import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  button(): void {
    const menusidebar = document.querySelector('.menusidebar');
    if (menusidebar?.classList.contains("expanded")) {
      menusidebar && menusidebar.classList.add("active");
      menusidebar && menusidebar.classList.remove("expanded");
    } else {
      menusidebar && menusidebar.classList.add("expanded");
      menusidebar && menusidebar.classList.remove("active");
    }
  }

}
