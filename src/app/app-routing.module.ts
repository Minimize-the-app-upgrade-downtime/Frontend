import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddofficeComponent } from './addoffice/addoffice.component'
import { AddemployeeComponent } from './addemployee/addemployee.component';

const routes: Routes = [
 
  { path:'add-office',component: AddofficeComponent},
  {path: 'add-employee', component: AddemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
