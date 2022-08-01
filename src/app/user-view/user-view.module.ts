import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewRoutingModule } from './user-view-routing.module';
import { CompanyPageComponent } from './company-page/company-page.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { DeveloperViewComponent } from './developer-view/developer-view.component';
import { ScrumViewComponent } from './scrum-view/scrum-view.component';


@NgModule({
  declarations: [
    CompanyPageComponent,
    AdminViewComponent,
    DeveloperViewComponent,
    ScrumViewComponent
  ],
  imports: [
    CommonModule,
    UserViewRoutingModule
  ]
})
export class UserViewModule { }
