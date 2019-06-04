import {Currency} from '../currency/currency';
import {Portfolio} from '../portfolio/portfolio';
import {Link} from '../link/link';

export class PortfolioLine {
  amount: number;
  currency: Currency;
  id: number;
  portfolio: Portfolio;
  links: Link[];
  constructor(id?: number, amount?: number, currency?: Currency, portfolio?: Portfolio) {
    this.id = id;
    this.amount = amount;
    this.currency = currency;
    this.portfolio = portfolio;
  }
}
