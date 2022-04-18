import { Component, OnInit } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-quy-hoach',
  templateUrl: './quy-hoach.component.html',
  styleUrls: ['./quy-hoach.component.scss']
})
export class QuyHoachComponent implements OnInit {

  multi: any[] | undefined;
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { multi });
   }

  ngOnInit(): void {
  }

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


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
 

}