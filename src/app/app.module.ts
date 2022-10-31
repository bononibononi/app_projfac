import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { LoginComponent } from './seguranca/login/login.component';

import { PrimeNGModule } from './primeng.modules';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    PanelModule,
    PrimeNGModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
