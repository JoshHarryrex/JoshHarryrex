import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddstockComponent } from './addstock/addstock.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'addstock', component:AddstockComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
