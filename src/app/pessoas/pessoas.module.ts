import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNGModule } from './../primeng.modules';
import { PessoasRoutingModule } from './pessoas.routing';
import { PessoascadComponent } from './pessoascad/pessoascad.component';


@NgModule({
  declarations: [
    PessoascadComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    PessoasRoutingModule
  ]
})
export class PessoasModule { }
