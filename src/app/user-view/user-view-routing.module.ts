import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { DeveloperViewComponent } from './developer-view/developer-view.component';
import { ScrumViewComponent } from './scrum-view/scrum-view.component';

const routes: Routes = [
  {
    path:"",
    data:{
      title:"user-view"
    } 
  },
  {
    path:"company-page",
    component: CompanyPageComponent,
    data:{
      title:"pagina empresa",
    } 
  },
  {
    path:"admin-view",
    component: AdminViewComponent,
    data:{
      title:"admin-view"
    } 
  },
  {
    path:"developer-view",
    component: DeveloperViewComponent,
    data:{
      title:"developer-view"
    } 
  },
  {
    path:"scrum-view",
    component: ScrumViewComponent,
    data:{
      title:"scrum-view"
    } 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserViewRoutingModule { }
