import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_URL } from './../constants/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private serverUrl = SERVER_URL.dev;

  constructor(
    private httpClient: HttpClient
  ) { }

  convertCurrency (payload) : Observable<any> {
    return this.httpClient.post(this.serverUrl+'calculate', payload)
  }

}
