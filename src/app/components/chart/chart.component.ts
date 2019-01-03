import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/chart.js';
    document.body.appendChild(script);

    script.setAttribute('id', 'chart');
    script.setAttribute('data-dammy-json', [25, 75, 90, 90, 30, 90, 30, 90].toString());
  }
}
