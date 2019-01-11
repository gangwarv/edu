import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', canActivate:[AuthGuard], loadChildren:'./admin/dashboard/dashboard.module#DashboardModule' },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
