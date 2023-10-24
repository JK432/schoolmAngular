import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';
import { AuthGuard } from './helpers/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
  {
    path:'student',
    component:StudentdetailsComponent,
    canActivate:[AuthGuard,]
  },
  {
    path: 'dash',
    component: DashboardComponent,
    canActivate: [AuthGuard,]
  },
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
