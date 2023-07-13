import { Injectable } from '@angular/core';
import { ICurrency } from '../../models/ICurrency'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, tap, throwError } from 'rxjs';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  currency: ICurrency;

  convertCurrency(value: number, initialCurrency: string, targetCurrency: string): number {
    const initialRate = this.currency.conversion_rates[initialCurrency];
    const targetRate = this.currency.conversion_rates[targetCurrency];

    console.log('convertCurrency', initialCurrency, targetCurrency, initialRate, targetRate);
    
    if (!initialRate || !targetRate) {
      throw new Error("Invalid currency code");
    }

    if(initialCurrency === targetCurrency) {
      return value
    }

    return (value / initialRate) * targetRate;
  }

  queryCurrency(currencyCode: string) {
    return this.http.get<ICurrency>(`https://v6.exchangerate-api.com/v6/1b3dbbbf08ace069be90a02d/latest/${currencyCode}`)
      .pipe(
        retry(3),
        tap(currency => this.currency = currency),
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

}