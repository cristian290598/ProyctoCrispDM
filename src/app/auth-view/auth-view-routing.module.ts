import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SigninComponent } from './signin/signin.component';
import { VerifiEmailComponent } from './verifi-email/verifi-email.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: "auth-view"


    },
    children: [
      {
        path: "signin",
        component: SigninComponent,
        data: {
          title: "Iniciar sesion"
        }
      },


      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
        data: {
          title: "Restablecer contraseña"
        }
      },
      {
        path: "register-user",
        component: RegisterUserComponent,
        data: {
          title: "Registrar usuario"
        }
      },
      {
        path: "verify-email",
        component: VerifiEmailComponent,
        data: {
          title: "Verificar Email"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthViewRoutingModule { }
