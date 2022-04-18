import { Component, OnInit } from '@angular/core';
import { single } from './data';


@Component({
  selector: 'app-do-an-quy-hoach',
  templateUrl: './do-an-quy-hoach.component.html',
  styleUrls: ['./do-an-quy-hoach.component.scss']
})
export class DoAnQuyHoachComponent implements OnInit {

  single: any[] | undefined;
  view: any[] = [700, 400];
  multi: any[] | undefined;
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';


  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
   }

  ngOnInit(): void {
  }

  openList(evt: any, listName: string) {
   

    const list = document.querySelectorAll('.list')
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    console.log(listName);
    let e = document.querySelector(listName);
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
