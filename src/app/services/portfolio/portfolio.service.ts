import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Portfolio} from '../../classes/portfolio/portfolio';
import {map} from 'rxjs/operators';
import {Link} from '../../classes/link/link';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) { }

  private url = 'https://sheltered-cliffs-34052.herokuapp.com/api/portfolio';
  public static setPortafolioValue(value): Portfolio {
    const portfolio = new Portfolio(value.id, value.name);
    const links = [];
    // tslint:disable-next-line:forin
    for (const key in value._links) {
      const link = new Link(value._links[key].href);
      links.push(link);
    }
    portfolio.links = links;
    return portfolio;
  }
  getPortfolios(page?: string, size?: string, sort?: string) {
    const checkParams = {page, size, sort};
    const headers = new HttpHeaders({ Accept: 'application/json'});
    const portfolios = [];
    this.http.get(this.url, { headers, params: this.setHttpParams(checkParams) }).pipe(
      map(
        data => data['_embedded'].portfolios
      )).subscribe(
      (data) => {
        data.forEach((value) => {
          portfolios.push(PortfolioService.setPortafolioValue(value));
        });
      }
    );
    return portfolios;
  }
  getPortFolio(id: number) {
    const headers = new HttpHeaders({ Accept: '*/*'});
    return this.http.get(this.url + '/' + id, { headers });
  }
  createOrUpdatePortfolio(portfolio: Portfolio) {
    const headers = new HttpHeaders({ Accept: '*/*', 'Content-Type': 'application/json'});
    return this.http.post(this.url , portfolio , {headers});
  }
  public deletePortfolio(id: number) {
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
}
