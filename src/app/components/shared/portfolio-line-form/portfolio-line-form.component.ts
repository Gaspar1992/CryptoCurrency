import {Component, Input, OnInit} from '@angular/core';
import {PortfolioLine} from '../../../classes/portfolioLine/portfolio-line';
import {PortafolioLineService} from '../../../services/portafolioLine/portafolio-line.service';
import {Router} from '@angular/router';
import {CurrencyService} from '../../../services/currency/currency.service';
import {Portfolio} from '../../../classes/portfolio/portfolio';
import {Currency} from '../../../classes/currency/currency';
import {Link} from '../../../classes/link/link';

@Component({
  selector: 'app-portfolio-line-form',
  templateUrl: './portfolio-line-form.component.html',
  styleUrls: ['./portfolio-line-form.component.css']
})
export class PortfolioLineFormComponent implements OnInit {
  @Input() portfolio: Portfolio;
  @Input() portfolioLine: PortfolioLine;
  @Input() currencies: Currency[];
  error: boolean;
  errorMSG: any;
  change: boolean;
  amountDOM: HTMLInputElement = null;
  currencyDOM: HTMLInputElement = null;
  constructor(private service: PortafolioLineService,
              private router: Router) {
  }
  createOrUpdatePortfolioLine() {
    this.portfolioLine.amount = parseInt(this.amountDOM.value, 10);
    this.portfolioLine.currency = this.currencies.find( value => value.id === parseInt(this.currencyDOM.value, 10) );
    if (this.portfolioLine.links === undefined) {
      console.log(this.portfolioLine);
      this.portfolioLine.links = {};
      this.portfolioLine.links['currency'] = new Link();
    }
    this.portfolioLine.portfolio = this.portfolio;
    this.portfolioLine.links['currency'].href = this.portfolioLine.currency.links[0].href;
    this.service.createOrUpdatePortafolioLine(this.portfolioLine).pipe().subscribe(
      (data) => {
        this.error = false;
        this.change = true;
        this.router.navigate(['listPortfolio']);
      },
      error => {
        this.error = true;
        this.errorMSG = error;
      }
    );
  }
  reset() {
    this.portfolioLine = new PortfolioLine();
  }
  ngOnInit() {
    this.amountDOM = (document.getElementById('inputAmount') as HTMLInputElement);
    this.currencyDOM = (document.getElementById('inputCurrency') as HTMLInputElement);
  }

}
