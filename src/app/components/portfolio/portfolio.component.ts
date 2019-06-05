import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Portfolio} from '../../classes/portfolio/portfolio';
import {PortfolioService} from '../../services/portfolio/portfolio.service';
import {CurrencyService} from '../../services/currency/currency.service';
import {Currency} from '../../classes/currency/currency';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio;
  loading: boolean;
  currencies: Currency[];
  constructor(private router: ActivatedRoute,
              private service: PortfolioService,
              private currencyService: CurrencyService) {
    this.loading = true;
    this.currencies = this.currencyService.getCurrencies('0', '20', 'id');

  }

  getPortfolio(id: number) {
    this.service.getPortFolio( id ).pipe().subscribe(
      (data) => {
        this.portfolio = PortfolioService.setPortafolioValue(data);
        this.loading = false;
      }
    );
}
  ngOnInit() {
    this.router.params.subscribe( params => {
      this.getPortfolio(params.id);
    });
  }

}
