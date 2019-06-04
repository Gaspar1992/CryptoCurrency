import {PortfolioLine} from '../portfolioLine/portfolio-line';
import {Link} from '../link/link';

export class Portfolio {
  public id: number;
  public lines: PortfolioLine[];
  public links: Link[];
  public name: string;
  constructor(id?: number, name?: string, lines?: PortfolioLine[]) {
    this.id = id;
    this.name = name;
    this.lines = lines;
  }
}
