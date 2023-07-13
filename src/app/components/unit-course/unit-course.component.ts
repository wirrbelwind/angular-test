import { Component, Input } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency/currency.service';

@Component({
  selector: 'app-unit-course',
  templateUrl: './unit-course.component.html',
  styleUrls: ['./unit-course.component.scss']
})
export class UnitCourseComponent {
  constructor(
    public currencyService: CurrencyService
  ) {}
  @Input() currencyCode: string
}
