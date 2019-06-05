import {Currency} from '../currency/currency';
import {Portfolio} from '../portfolio/portfolio';

export class PortfolioLine {
  amount: number;
  currency: Currency;
  id: number;
  portfolio: Portfolio;
  links: object;
  constructor(id?: number, amount?: number, currency?: Currency, portfolio?: Portfolio) {
    this.id = id;
    this.amount = amount;
    this.currency = currency;
    this.portfolio = portfolio;
  }
}
