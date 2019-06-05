import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListCurrenciesComponent} from './components/list-currencies/list-currencies.component';
import {ListPortfolioComponent} from './components/list-portfolio/list-portfolio.component';
import {CurrencyComponent} from './components/currency/currency.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listCurrency', component: ListCurrenciesComponent },
  { path: 'currency/:id', component: CurrencyComponent},
  { path: 'listPortfolio', component: ListPortfolioComponent },
  { path: 'portfolio/:id', component: PortfolioComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
