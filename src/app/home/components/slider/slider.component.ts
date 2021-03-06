import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() min: number = 0;
  @Input() max: number = 0;
  @Input() value: number = 0;
  @Input() expType:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
