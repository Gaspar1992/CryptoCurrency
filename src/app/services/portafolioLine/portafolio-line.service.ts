import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Portfolio} from '../../classes/portfolio/portfolio';
import {Link} from '../../classes/link/link';
import {PortfolioLine} from '../../classes/portfolioLine/portfolio-line';
import {PortfolioService} from '../portfolio/portfolio.service';
import {map} from 'rxjs/operators';
import {CurrencyService} from '../currency/currency.service';

@Injectable({
  providedIn: 'root'
})
export class PortafolioLineService {


  constructor(private http: HttpClient,
              private portfolioService: PortfolioService,
              private currencySerice: CurrencyService) { }
  getPortafolioLines(id: number) {
    const url = `https://sheltered-cliffs-34052.herokuapp.com/api/portfolio/${ id }/lines`;
    const headers = new HttpHeaders({ Accept: 'application/hal+json'});
    const portfolioLines = [];
    this.http.get(url, { headers }).pipe(
      map(
        data => data['_embedded'].portfolioLines
      )).subscribe(
      (data) => {
        data.forEach((value) => {
          const portfolioLine = this.setPortfolioLineValue(value);
          this.portfolioService.getPortFolio(id).pipe().subscribe(
            (data2) => {
              portfolioLine.portfolio = PortfolioService.setPortafolioValue(data2);
            }
          );
          portfolioLines.push(portfolioLine);
        });
      }
    );
    return portfolioLines;
  }
  public createOrUpdatePortafolioLine(portfolioLine: PortfolioLine) {

    const url = 'https://sheltered-cliffs-34052.herokuapp.com/api/portfolioline';
    const headers = new HttpHeaders({ Accept: '*/*', 'Content-Type': 'application/json'});
    const body = {
      id: portfolioLine.id,
      amount: portfolioLine.amount,
      currency: portfolioLine.currency.links[0].href,
      portfolio: portfolioLine.portfolio.links[0].href
    };
    return this.http.post(url, body, { headers });
  }
  public deletePortofolioLine(id: number) {
    const url = 'https://sheltered-cliffs-34052.herokuapp.com/api/portfolioline/';
    const headers = new HttpHeaders({ Accept: '*/*', 'Content-Type': 'application/json'});
    return this.http.delete( url + id, {headers} );
  }
// portfolioLine.portfolio = this.portfolioService.getPortFolio()
  public setPortfolioLineValue(value): PortfolioLine {
    const portfolioLine = new PortfolioLine(value.id, value.amount);
    const links = {};
    // tslint:disable-next-line:forin
    for (const key in value._links) {
      const link = new Link(value._links[key].href);
      links[key] = link;
    }
    portfolioLine.links = links;
    this.http.get(links['currency'].href).pipe().subscribe(
      (data) => {
        portfolioLine.currency = this.currencySerice.setCurrencyValue(data);
      }
    );
    return portfolioLine;
  }
}
