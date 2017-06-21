import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
    {
       path: '',
       redirectTo: 'templates',
       pathMatch: 'full'
    },
    {
        path: 'templates',
        component: TemplateComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
