import {Component, Input, OnInit} from '@angular/core';
import {Currency} from '../../../classes/currency/currency';
import {CurrencyService} from '../../../services/currency/currency.service';
import {AcronymValidateService} from '../../../classes/acronymValidate/acronym-validate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css']
})
export class CurrencyFormComponent implements OnInit {

  @Input()  public currency: Currency ;
  nameDOM: HTMLInputElement = null;
  acronymDOM: HTMLInputElement = null;
  change: boolean;
  error: boolean;
  errorMSG: any;
  constructor(private service: CurrencyService,
              private validator: AcronymValidateService,
              private router: Router) {
    this.change = false;
  }
  ngOnInit() {
    this.acronymDOM = (document.getElementById('inputAcronym') as HTMLInputElement);
    this.nameDOM = (document.getElementById('inputName') as HTMLInputElement);
  }
  createOrUpdateCurrency() {
    this.currency.acronym = this.acronymDOM.value;
    this.currency.name = this.nameDOM.value;
    if (!this.validator.validateAcronym(this.currency.acronym)) {
      this.error = true;
      this.errorMSG = { message: 'Acronym invalid'};
      return;
    }
    this.service.createOrUpdateCurrency(this.currency).pipe().subscribe(
      (data) => {
        this.change = true;
        this.error = false;
      },
      error => {
        this.error = true;
        this.errorMSG = error;
      }
    );
  }

  deleteCurrency() {
    this.service.deleteCurrency(this.currency.id).pipe().subscribe(
      (data) => {
        this.error = false;
        this.router.navigate(['listCurrency']);
      },
      error => {
        this.error = true;
        this.errorMSG = error;
      }
    );
  }
}
