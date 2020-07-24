import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistic-component',
  templateUrl: './statistic-component.component.html',
  styleUrls: ['./statistic-component.component.css']
})
export class StatisticComponentComponent implements OnInit {
  @Input() data = [];
  constructor() { }

  ngOnInit(): void {
  }

}
