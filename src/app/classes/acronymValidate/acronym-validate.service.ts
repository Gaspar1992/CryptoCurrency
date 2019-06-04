import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AcronymValidateService {

  private url = 'https://min-api.cryptocompare.com/data/all/coinlist';

  private data: any;

  constructor(private http: HttpClient) {
    const headers = new HttpHeaders({ Accept: 'application/json'});
    this.http.get(this.url, { headers }).pipe(
      map( data => data['Data'] )
    ).subscribe( (data) => {
      this.data = data;
    });
  }
  validateAcronym(acronym: string): boolean {
    let ret = false;
    for (const acronymData in this.data) {
      if (acronymData !== acronym) {
        continue;
      }
      ret = true;
      break;
    }
    return ret;
  }
}
