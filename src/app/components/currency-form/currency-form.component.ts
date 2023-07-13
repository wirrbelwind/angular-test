import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency/currency.service';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.scss']
})
export class CurrencyFormComponent {
  constructor(
    private currencyService: CurrencyService
  ) { }

  currencies = ['USD', 'UAH', 'EUR']

  form = new FormGroup({
    // left input
    "initialAmount": new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0)],
      nonNullable: true
    }),
    // left currency
    "initialCurrency": new FormControl<string>(
      this.currencies[0],
      {
        nonNullable: true,
        validators: [Validators.required]
      }),
    // right input
    "targetAmount": new FormControl<number>(0,
      {
        validators: [Validators.required, Validators.min(0)],
        nonNullable: true
      }),
    // right currency
    "targetCurrency": new FormControl<string>(
      this.currencies[0],
      {
        nonNullable: true,
        validators: [Validators.required]
      }),
  })

  // form data getters (for short access from html)
  public get initialAmount() {
    return this.form.controls.initialAmount.value
  }
  public get targetAmount() {
    return this.form.controls.targetAmount.value
  }
  public get initialCurrency() {
    return this.form.controls.initialCurrency.value
  }
  public get targetCurrency() {
    return this.form.controls.targetCurrency.value
  }

  // form handler
  onChange() {
    if (!this.form.valid) {
      return;
    }

    // chose which value to convert
    if (this.form.controls.initialAmount.dirty
      || this.form.controls.targetCurrency.dirty) {

      this.convertInitialToTarget()
      return;
    }

    if (this.form.controls.targetAmount.dirty
      || this.form.controls.initialCurrency.dirty) {

      this.convertTargetToInitial()
      return;
    }

    // after all changes marks all controls as pristine
    this.form.markAsPristine()
  }

  // swaps values of both inputs and values of both selects
  // so component shouldn't recalculate convertCurrency() method
  onSwap() {
    this.form.setValue({
      initialAmount: this.targetAmount,
      targetAmount: this.initialAmount,
      initialCurrency: this.targetCurrency,
      targetCurrency: this.initialCurrency
    })
  }

  private convertInitialToTarget() {
    const convertedCurrency = this.currencyService.convertCurrency(
      this.initialAmount,
      this.initialCurrency,
      this.targetCurrency
    )
    this.form.controls.targetAmount.setValue(convertedCurrency)
  }
  private convertTargetToInitial() {
    const convertedCurrency = this.currencyService.convertCurrency(
      this.targetAmount,
      this.targetCurrency,
      this.initialCurrency
    )
    this.form.controls.initialAmount.setValue(convertedCurrency)
  }
}
