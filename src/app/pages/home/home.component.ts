import { Component, OnInit } from '@angular/core';

import { CurrencyService } from './../../services/currency.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private currencies = [
     { 
       name: 'EUR',
       trm: 3400
      },
      { 
        name: 'USD',
        trm: 3300
       }
    ]
  private amountValue = 0
  private selectedCurrency = ''
  convertedCurrency = 0

  constructor(
    private currencyService: CurrencyService
  ) { }

  ngOnInit() {
  }

 convertCurrency() {
    console.log(this.amountValue, this.selectedCurrency)

    this.currencyService.convertCurrency({
      'amount': this.amountValue,
      'selectedTrm': this.selectedCurrency
    }).toPromise().then( result => {
      console.log(result.data)
        this.convertedCurrency = this.currencyFormat(result.data)
    })
  }

  currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
}
