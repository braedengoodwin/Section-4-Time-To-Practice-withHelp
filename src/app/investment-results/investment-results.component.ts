import { Component, inject, Input } from '@angular/core';
import { NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  ////commenting out to use service file instead
  // @Input({ required: true }) results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultData;
  }

  // public trackByResultYear(index: number, result: number) {
  //   return result.year;
  // }
}
