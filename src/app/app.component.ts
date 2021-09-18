import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BitcoinService } from './bitcoin.service';
import { TemporizadorService } from './temporizador.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    public bitcoin: BitcoinService,
    public timer: TemporizadorService
  ) {}

  ngOnInit() {
    this.update();
  }

  updateBicoinRates() {
    this.bitcoin.updateBicoinRates();
  }

  update() {
    this.timer.update();
  }
}
