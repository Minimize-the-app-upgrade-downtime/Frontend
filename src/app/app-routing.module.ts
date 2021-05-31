import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddofficeComponent } from './addoffice/addoffice.component'

const routes: Routes = [
 
  { path:'add-office',component: AddofficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
