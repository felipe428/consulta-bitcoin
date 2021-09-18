import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable()
export class TemporizadorService {
  constructor(public bitcoin: BitcoinService) {}

  updateBicoinRates() {
    this.bitcoin.updateBicoinRates();
  }

  update() {
    setInterval(() => {
      this.updateBicoinRates();
    }, 60000);
  }
}
