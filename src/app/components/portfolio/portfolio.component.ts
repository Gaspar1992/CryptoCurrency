import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Portfolio} from '../../classes/portfolio/portfolio';
import {PortfolioService} from '../../services/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio;
  loading: boolean;
  constructor(private router: ActivatedRoute,
              private service: PortfolioService) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getPortfolio(params.id);
    });
  }

  getPortfolio(id: number) {
    this.service.getPortFolio( id ).pipe().subscribe(
      (data) => {
        console.log(data);
        this.portfolio = PortfolioService.setPortafolioValue(data);
        this.loading = false;
      }
    );
}
  ngOnInit() {
  }

}
