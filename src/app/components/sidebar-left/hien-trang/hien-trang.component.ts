import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hien-trang',
  templateUrl: './hien-trang.component.html',
  styleUrls: ['./hien-trang.component.scss']
})
export class HienTrangComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // openMenu(): void {
  //   const menu = document.querySelector('.menu');
  //   if (menu?.classList.contains("expanded")) {
  //     menu && menu.classList.add("active");
  //     menu && menu.classList.remove("expanded");
  //   } else {
  //     menu && menu.classList.add("expanded");
  //     menu && menu.classList.remove("active");
  //   }
  // }

  openMenu(evt: any, menuName: string) {



    const menu = document.querySelectorAll('.menu')
    for (let i = 0; i < menu.length; i++) {
      menu[i].classList.remove("active");
    }

    console.log(menuName);
    let e = document.querySelector(menuName);
    e && e.classList.add("display");
    evt.currentTarget.className += " active";
  }

}
