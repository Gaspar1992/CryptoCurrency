import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Portfolio} from '../../classes/portfolio/portfolio';
import {Link} from '../../classes/link/link';
import {PortfolioLine} from '../../classes/portfolioLine/portfolio-line';
import {PortfolioService} from '../portfolio/portfolio.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortafolioLineService {


  constructor(private http: HttpClient,
              private portfolioService: PortfolioService) { }
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
          const portfolioLine = this.setCurrencyValue(value);
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
// portfolioLine.portfolio = this.portfolioService.getPortFolio()
  public setCurrencyValue(value): PortfolioLine {
    const portfolioLine = new PortfolioLine(value.id, value.amount);
    const links = [];
    // tslint:disable-next-line:forin
    for (const key in value._links) {
      const link = new Link(value._links[key].href);
      links.push(link);
    }
    portfolioLine.links = links;
    return portfolioLine;
  }
}
