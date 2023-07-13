import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UnitCourseComponent } from './components/unit-course/unit-course.component';
import { CurrencyFormComponent } from './components/currency-form/currency-form.component';
import { SelectComponent } from './components/select/select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitCourseComponent,
    CurrencyFormComponent,
    SelectComponent,
    NavbarComponent,
    CurrencyInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
