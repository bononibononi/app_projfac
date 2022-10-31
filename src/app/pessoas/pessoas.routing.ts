import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PessoascadComponent } from './pessoascad/pessoascad.component';

const routes: Routes = [
    { path: '', component: PessoascadComponent },

];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PessoasRoutingModule { }
