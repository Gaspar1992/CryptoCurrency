import { Component, OnInit } from '@angular/core';
import {Portfolio} from '../../classes/portfolio/portfolio';
import {PortfolioService} from '../../services/portfolio/portfolio.service';

@Component({
  selector: 'app-list-portfolio',
  templateUrl: './list-portfolio.component.html',
  styleUrls: ['./list-portfolio.component.css']
})
export class ListPortfolioComponent implements OnInit {
  portfolio: Portfolio;
  portfolios: Portfolio[];
  loading: boolean;
  error: boolean;
  errorMSG: any;
  constructor(private service: PortfolioService) {
    this.loading = true;
    this.portfolios = this.service.getPortfolios();
    this.portfolio = new Portfolio();
    this.loading = false;
    this.error = false;
  }
  deletePortfolio(id: number) {
    this.service.deletePortfolio(id).pipe().subscribe(
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
