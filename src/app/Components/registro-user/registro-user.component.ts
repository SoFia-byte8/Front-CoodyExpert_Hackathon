import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { UserService } from '../../Services/user.service' ;
@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css']
})
export class RegistroUserComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.Validator()
  }

  ngOnInit(): void {
  }
  Validator() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: [''],
      role: ['Programador', ],
      tipo: ['Medium',]
   
    })
  }
  saveUser() {
    if (this.signUpForm.valid) {
      console.log
      this.userService.createUser(this.signUpForm.value).subscribe(
        (userCreated) => {
          console.log(userCreated)
          alert('Usuario creado correctamente')
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
