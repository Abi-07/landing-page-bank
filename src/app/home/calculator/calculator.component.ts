import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  max = 300000;
  min = 100000;
  value = 150000;

  isChecked = true;

  constructor() { }

  ngOnInit(): void {
  }

}
