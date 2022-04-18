import { Component, OnInit } from '@angular/core';
import { single } from './data';


@Component({
  selector: 'app-hien-trang',
  templateUrl: './hien-trang.component.html',
  styleUrls: ['./hien-trang.component.scss']
})
export class HienTrangComponent implements OnInit {
  multi: any[] | undefined;
  single: any[] | undefined;
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  constructor() {
    Object.assign(this, { single });

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
