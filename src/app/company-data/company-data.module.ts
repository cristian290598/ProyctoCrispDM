import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CompanyDataRoutingModule } from './company-data-routing.module';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateMethodologyComponent } from './create-methodology/create-methodology.component';
import { CreateProyectComponent } from './create-proyect/create-proyect.component';

@NgModule({
  declarations: [
    CreateCompanyComponent,
    CreateMethodologyComponent,
    CreateProyectComponent,
    
  ],
  imports: [
    
    CommonModule,
    CompanyDataRoutingModule,
    
  ]
})
export class CompanyDataModule { }
