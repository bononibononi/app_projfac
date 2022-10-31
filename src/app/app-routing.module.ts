import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './seguranca/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
{path: 'pessoascad', loadChildren:()=> import('./pessoas/pessoas.module').then((m)=> m.PessoasModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
