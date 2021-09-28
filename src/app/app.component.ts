import { Component } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { TemporizadorService } from './temporizador.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public bitcoin: BitcoinService,
    public timer: TemporizadorService
  ) {}

  ngOnInit() {
    this.bitcoin.updateBicoinRates();
    this.update();
  }

  updateBicoinRates() {
    this.bitcoin.updateBicoinRates();
  }

  update() {
    this.timer.update();
  }
}
