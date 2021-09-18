import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Bitcoin {
  time: {
    updated: string;
  };
  bpi: {
    USD: {
      rate_float: number;
    };
    BRL: {
      rate_float: number;
    };
  };
}

@Injectable()
export class BitcoinService {
  bitcoinRates: Array<Bitcoin> = [];

  constructor(private http: HttpClient) {}

  updateBicoinRates() {
    this.http
      .get<Bitcoin>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.bitcoinRates.push(data);
      });
  }
}
