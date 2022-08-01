import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyDataRoutingModule } from './company-data-routing.module';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateMethodologyComponent } from './create-methodology/create-methodology.component';


@NgModule({
  declarations: [
    CreateCompanyComponent,
    CreateMethodologyComponent
  ],
  imports: [
    CommonModule,
    CompanyDataRoutingModule
  ]
})
export class CompanyDataModule { }
