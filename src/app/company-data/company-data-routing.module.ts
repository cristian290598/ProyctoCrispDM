import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateMethodologyComponent } from './create-methodology/create-methodology.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "company-data"
    }
  },
  {
    path: "create-company",
    component: CreateCompanyComponent,
    data: {
      title: "create-company"
    }
  },
  {
    path: "create-methodology",
    component: CreateMethodologyComponent,
    data: {
      title: "create-methodology"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyDataRoutingModule { }
