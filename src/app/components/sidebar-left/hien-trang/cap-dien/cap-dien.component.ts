import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cap-dien',
  templateUrl: './cap-dien.component.html',
  styleUrls: ['./cap-dien.component.scss']
})
export class CapDienComponent implements OnInit {

  multi: any[] | undefined;
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  animations: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
  }

}
