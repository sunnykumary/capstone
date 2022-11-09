import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';

import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';



const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'homepage', component:HomepageComponent},
  {path: '', redirectTo:'/homepage', pathMatch: 'full' }

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
