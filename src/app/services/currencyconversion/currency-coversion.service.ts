import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyCoversionService {
  constructor(private http: HttpClient) { }
  public conversionCurrency(acronym: string, conversion: string = 'EUR') {
    const headers = new HttpHeaders({ Accept: '*/*', 'Content-Type': 'application/json'});
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${acronym}&tsyms=${conversion}`;
    return this.http.get(url , { headers });
  }
}
