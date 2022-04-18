import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})
export class SidebarLeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tonggle(): void {
    const menu = document.querySelector('.menu');
    if (menu?.classList.contains("expanded")) {
      menu && menu.classList.add("active");
      menu && menu.classList.remove("expanded");
    } else {
      menu && menu.classList.add("expanded");
      menu && menu.classList.remove("active");
    }
  
    // const list = document.querySelectorAll('.menu-item')
    // for (let i = 0; i < list.length; i++) {
    //   list[i].classList.remove("active");
    // }

    // console.log(menuName);
    // let e = document.querySelector(menuName);
    // e && e.classList.add("display");
    // evt.currentTarget.className += " active";
  }
  }




