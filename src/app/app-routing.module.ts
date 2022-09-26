import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditdataComponent } from './components/editdata/editdata.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewdataComponent } from './components/newdata/newdata.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    pathMatch:'full'
    
  },
  {
    path:'menu',
    component:MenuComponent,
    pathMatch: 'full'
   },
  {
    path:'add',
    component: NewdataComponent,
    pathMatch:'full'
  },
  {
    path:'edit/:id',
    component: EditdataComponent,
    pathMatch:'full'
  },
  {
    path: '', 
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'',
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
