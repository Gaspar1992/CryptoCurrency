import {Component, Input, OnInit} from '@angular/core';
import {PortfolioLine} from '../../classes/portfolioLine/portfolio-line';
import {PortafolioLineService} from '../../services/portafolioLine/portafolio-line.service';

@Component({
  selector: 'app-list-portafolio-lines',
  templateUrl: './list-portafolio-lines.component.html',
  styleUrls: ['./list-portafolio-lines.component.css']
})
export class ListPortafolioLinesComponent implements OnInit {
  @Input() idPortfolio: number;
  portfolioline: PortfolioLine;
  portfoliolines: PortfolioLine[];
  constructor(private service: PortafolioLineService) {
    this.portfolioline = new PortfolioLine();
  }
  deletePortfolioLine(id: number) {
    console.log('yii');
  }
  ngOnInit() {
    this.portfoliolines = this.service.getPortafolioLines(this.idPortfolio);
  }

}
