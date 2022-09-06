import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  first_name: string='';
  second_name: string='';
  first_surname: string='';
  second_surname: string='';
  //personal_id: number='';
  selection_gender: string='';
  selection_rol: string='';
  email_company: string='';
  password_company: string='';
  birth_date: string='';

  registrar(){
    console.log(`los datos suministrados son:`,this.first_name,this.second_name,this.first_surname, this.second_surname, this.selection_gender,this.selection_rol, this.email_company,this.password_company,this.birth_date );
  }

}
