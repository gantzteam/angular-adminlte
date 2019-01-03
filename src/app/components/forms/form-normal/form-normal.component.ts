import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-normal',
  templateUrl: './form-normal.component.html',
  styleUrls: ['./form-normal.component.css']
})
export class FormNormalComponent implements OnInit {

  mRegister: RegisterModel;

  constructor() { }

  ngOnInit() {
    this.mRegister = new RegisterModel();
  }

  onSubmit() {
    window.alert(this.mRegister.email);
  }

}

class RegisterModel {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
