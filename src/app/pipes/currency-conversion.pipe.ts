import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyCoversionService} from '../services/currencyconversion/currency-coversion.service';
import {map} from 'rxjs/operators';

@Pipe({
  name: 'currencyConversion',
})
export class CurrencyConversionPipe implements PipeTransform {

  constructor(private currencyConversionService: CurrencyCoversionService) {}
  conversion: any;
  transform(value: any, args?: any): any {
    this.currencyConversionService.conversionCurrency(args).pipe(
      map(
        data => data['EUR']
      )
    ).subscribe(
      (data) => {
        this.conversion = data * value;
        console.log(this.conversion);
        return this.conversion;
      }
    );
  }

}
