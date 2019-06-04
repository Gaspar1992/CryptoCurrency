import { Component, OnInit } from '@angular/core';
import {CurrencyService} from '../../services/currency/currency.service';
import {Currency} from '../../classes/currency/currency';

@Component({
  selector: 'app-list-currencies',
  templateUrl: './list-currencies.component.html',
  styleUrls: ['./list-currencies.component.css']
})
export class ListCurrenciesComponent implements OnInit {

  currency: Currency;
  currencies: Currency[];
  error: boolean;
  errorMSG: any;
  constructor(private service: CurrencyService) {
    this.currencies = this.service.getCurrencies();
    this.currency = new Currency();
    this.error = false;
  }
  deleteCurrency(id: number) {
    this.service.deleteCurrency(id).pipe().subscribe(
      (data) => {
        console.log(data);
        this.error = false;
      },
      error => {
        this.error = true;
        this.errorMSG = error;
      }
    );
  }
  ngOnInit() {
  }

}
