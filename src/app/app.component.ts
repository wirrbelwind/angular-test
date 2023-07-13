import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CurrencyService } from './services/currency/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Test';
  currencyLoading = false;

  constructor(
    public currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
    this.currencyLoading = true
    this.currencyService.queryCurrency('UAH')
      .subscribe(() => {
        this.currencyLoading = false
        console.log(this.currencyService.currency);
      })
  }

}
