import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { DoAnQuyHoachComponent } from './do-an-quy-hoach/do-an-quy-hoach.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  public href: any = "";
  url: string = "";
  constructor(private route: Router) { 
      this.url = window.location.href;
      this.href = this.url.split("/")[3];
      console.log(this.href);
  }

  ngOnInit(): void {
    
  }

}
