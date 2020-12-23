import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '', component: LoginComponent },
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'viewdetails/:id', component: ViewdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
