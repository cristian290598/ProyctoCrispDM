import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{



  constructor() {}

    ngOnInit(): void {
    }

    desactivado:false;
    email: string = '';
    password: string = '';

    ingresarDatos(){
      alert("Ha iniciado sesion correctamente" );
      console.log("el correo es: ",this.email, "la contraseña es: ",this.password);
    }

}




