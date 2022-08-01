import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  
  {
    path: 'auth-view',
    loadChildren: () => import('../../auth-view/auth-view.module').then(m => m.AuthViewModule)
  },
  {
    path: 'user-view',
    loadChildren: () => import('../../user-view/user-view.module').then(m => m.UserViewModule)
  },
  {
    path: 'company-data',
    loadChildren: () => import('../../company-data/company-data.module').then(m => m.CompanyDataModule)
  },

];
