import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Currency} from '../../classes/currency/currency';
import {map} from 'rxjs/operators';
import {Link} from '../../classes/link/link';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private url = 'https://sheltered-cliffs-34052.herokuapp.com/api/currency';
  constructor(private http: HttpClient) { }
  public getCurrencies(page?: string, size?: string, sort?: string) {
    const checkParams = {page, size, sort};
    const headers = new HttpHeaders({ Accept: 'application/json'});
    const currencies = [];
    this.http.get(this.url, { headers, params: this.setHttpParams(checkParams) }).pipe(
      map(
        data => data['_embedded'].currencies
      )).subscribe(
      (data) => {
        data.forEach((value) => {
          currencies.push(this.setCurrencyValue(value));
        });
        }
    );
    return currencies;
  }
  public getCurrency(id: number) {
    const headers = new HttpHeaders({ Accept: '*/*'});
    return this.http.get(this.url + '/' + id, { headers });
  }
  public createOrUpdateCurrency(currency: Currency) {
    const headers = new HttpHeaders({ Accept: '*/*', 'Content-Type': 'application/json'});
    return this.http.post(this.url , currency , {headers});
  }
  public deleteCurrency(id: number) {
    const headers = new HttpHeaders({ Accept: '*/*', 'Content-Type': 'application/json'});
    return this.http.delete(this.url + '/' + id , { headers });
  }
  private setHttpParams(params: object): HttpParams {
    const httpParams = new HttpParams();
    // tslint:disable-next-line:forin
    for (const key in params) {
      const value = params[key];
      if (value === undefined) { return; }
      httpParams.set(key, value);
    }
    return httpParams;
  }
  public setCurrencyValue(value): Currency {
    const currency = new Currency(value.acronym, value.id, value.name);
    const links = [];
    // tslint:disable-next-line:forin
    for (const key in value._links) {
      const link = new Link(value._links[key].href);
      links.push(link);
    }
    currency.links = links;
    return currency;
  }
}
