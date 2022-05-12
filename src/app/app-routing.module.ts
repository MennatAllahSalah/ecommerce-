import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './Components/product/product/product.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
const routes: Routes = [
  {path: '', component:MainLayoutComponent, children: [
    {path:'Product', component:ProductsComponent},
 
  
  ]},

  {path:'', redirectTo:'/Login', pathMatch:'full'},
  {path:'Login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
