import {Component, Input, OnInit} from '@angular/core';
import {PortfolioLine} from '../../classes/portfolioLine/portfolio-line';
import {PortafolioLineService} from '../../services/portafolioLine/portafolio-line.service';
import {Router} from '@angular/router';
import {Currency} from '../../classes/currency/currency';
import {CurrencyService} from '../../services/currency/currency.service';
import {CurrencyCoversionService} from '../../services/currencyconversion/currency-coversion.service';
import {map} from 'rxjs/operators';
import {Portfolio} from '../../classes/portfolio/portfolio';

@Component({
  selector: 'app-list-portafolio-lines',
  templateUrl: './list-portafolio-lines.component.html',
  styleUrls: ['./list-portafolio-lines.component.css']
})
export class ListPortafolioLinesComponent implements OnInit {
  @Input() portfolio: Portfolio;
  @Input() currencies: Currency[];
  portfolioline: PortfolioLine;
  portfoliolines: PortfolioLine[];
  error: boolean;
  errorMSG: any;
  change: boolean;
  loading: boolean;
  conversion: object;
  constructor(private service: PortafolioLineService,
              private currencyService: CurrencyService,
              private router: Router,
              private currencyConversionService: CurrencyCoversionService) {
    this.loading = true;

    this.conversion = {};

  }
  deletePortfolioLine(id: number) {
    this.service.deletePortofolioLine(id).pipe().subscribe(
      (data) => {
        this.error = false;
        this.change = true;
        this.router.navigate(['portfolio/' + this.portfolio.id]);
      },
      error => {
        this.error = true;
        this.errorMSG = error;
      }
    );
  }
  updateForm(id: number) {
    this.portfolioline = this.portfoliolines.find(value => value.id === id);
  }
  loadEUR() {
    this.portfoliolines.forEach((value, key) => {
      this.currencyConversionService.conversionCurrency(value.currency.acronym).pipe(
        map(
          data => data['EUR']
        )
      ).subscribe(
        (data) => {
          this.conversion[value.id] = data * value.amount;
          this.loading = false;
        }
      );
    });
  }
  ngOnInit() {
    this.portfoliolines = this.service.getPortafolioLines(this.portfolio.id);
    this.portfolioline = new PortfolioLine();
    this.loading = false;
  }
}
