import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CurrencyService} from '../../services/currency/currency.service';
import {Currency} from '../../classes/currency/currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currency: Currency;
  loading: boolean;
  constructor(private router: ActivatedRoute,
              private service: CurrencyService) {
      this.loading = true;
      this.router.params.subscribe( params => {
        this.getCurrency(params.id);
      });
  }
  getCurrency(id: number) {
     this.service.getCurrency( id ).pipe().subscribe(
      (data) => {
        this.currency = this.service.setCurrencyValue(data);
        this.loading = false;

      }
    );
  }
  ngOnInit() {

  }

}
