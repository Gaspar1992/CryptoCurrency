import {Component, Input, OnInit} from '@angular/core';
import {Portfolio} from '../../../classes/portfolio/portfolio';
import {PortfolioService} from '../../../services/portfolio/portfolio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent implements OnInit {

  change: boolean;
  error: boolean;
  errorMSG: any;
  nameDOM: HTMLInputElement = null;
  @Input() public portfolio: Portfolio;
  constructor(private service: PortfolioService,
              private router: Router) {
    this.change = false;
    this.error = false;
  }

  createOrUpdatePortfolio() {
    this.portfolio.name = this.nameDOM.value;

    this.service.createOrUpdatePortfolio(this.portfolio).pipe().subscribe(
      (data) => {
        this.change = true;
        this.error = false;
        this.router.navigate(['listPortfolio']);
      },
      error => {
        this.error = true;
        this.errorMSG = error;
      }
    );
    return true;
  }
  deletePortfolio() {
    this.service.deletePortfolio(this.portfolio.id).pipe().subscribe(
      (data) => {
        this.error = false;
        this.router.navigate(['listPortfolio']);
      },
      error => {
        this.error = true;
        this.errorMSG = error;
      }
    );
  }
  ngOnInit() {
    this.nameDOM = (document.getElementById('inputName') as HTMLInputElement);
  }

}
