import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import {CompanyService} from '../../Services/company.service';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  signUpForm: FormGroup //permite indical las validaciones  que se crearan

  constructor(
    private formBuilder: FormBuilder,
    private CompanyService: CompanyService,
  ) {
    this.Validator()
  }

  ngOnInit(): void {
  }
  Validator(){
    this.signUpForm = this.formBuilder.group({
      nameCompany: ['', Validators.required],
      phoneCompany: ['', Validators.required],
      nitCompany: ['', [ Validators.required, Validators.minLength(9)]],
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['Company',],
      tipo: ['Medium',]
    });

  }
  saveCompany() {
    if (this.signUpForm.valid) {
      console.log
      this.CompanyService.createCompany(this.signUpForm.value).subscribe(
        (companyCreated) => {
          console.log(companyCreated)
          alert('Empresa creada correctamente')
        },
        (error) => {
          console.error('Tuvimos un error ->', error)
        }
      );
    } else {
      alert('El formulario no es valido ')
    }
  }
}
