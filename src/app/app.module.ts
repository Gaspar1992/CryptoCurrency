import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';
import { ListCurrenciesComponent } from './components/list-currencies/list-currencies.component';
import { ListPortfolioComponent } from './components/list-portfolio/list-portfolio.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CurrencyService} from './services/currency/currency.service';
import {PortfolioService} from './services/portfolio/portfolio.service';
import {PortafolioLineService} from './services/portafolioLine/portafolio-line.service';
import {AppRoutingModule} from './app-routing.module';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CurrencyFormComponent } from './components/shared/currency-form/currency-form.component';
import { PortfolioFormComponent } from './components/shared/portfolio-form/portfolio-form.component';
import { ListPortafolioLinesComponent } from './components/list-portafolio-lines/list-portafolio-lines.component';
import { EuroCurrencyPipe } from './euro-currency.pipe';
import { PortfolioLineComponent } from './portfolio-line/portfolio-line.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CurrencyComponent,
    PortfolioComponent,
    HomeComponent,
    ListCurrenciesComponent,
    ListPortfolioComponent,
    LoadingComponent,
    CurrencyFormComponent,
    PortfolioFormComponent,
    ListPortafolioLinesComponent,
    EuroCurrencyPipe,
    PortfolioLineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CurrencyService, PortfolioService, PortafolioLineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
