import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardsContent = [
    {
      img: 'Get Paid Instantly.png',
      heading: 'Quick cash disbursement',
      detail: 'Get terms loans that your business needs within 72 hrs'
    },
    {
      img: 'Low interest rate.png',
      heading: 'Low-interest rate',
      detail: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'
    },
    {
      img: 'Secure Payments.png',
      heading: 'Zero Paperwork',
      detail: 'Get started instantly by submitting only your basic details & bank statements'
    },
    {
      img: 'freelancer_feature_icon_6@1.5x.png',
      heading: 'Ace your business finances',
      detail: 'Manage banking, accounting & everything in between, on one platform'
    },
    {
      img: 'Covid.png',
      heading: 'Loans to fight COVID-19',
      detail: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
