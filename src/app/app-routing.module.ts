import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddofficeComponent } from './addoffice/addoffice.component'
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewOfficeComponent }  from './view-office/view-office.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
 
  { path:'add-office',component: AddofficeComponent},
  {path: 'add-employee', component: AddemployeeComponent},
  {path: 'view-office', component: ViewOfficeComponent},
  {path: 'view-employee', component: ViewEmployeeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
