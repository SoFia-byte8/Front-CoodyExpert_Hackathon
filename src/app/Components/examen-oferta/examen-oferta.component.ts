import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ExamService } from '../../Services/exam.service';
import { CompanyService } from '../../Services/company.service';
@Component({
  selector: 'app-examen-oferta',
  templateUrl: './examen-oferta.component.html',
  styleUrls: ['./examen-oferta.component.css']
})
export class ExamenOfertaComponent implements OnInit {

  examForm: FormGroup;
  allCompany: any;
  companyExam: Array<any>=[];

  constructor(
    private formBuilder: FormBuilder,
    private examService: ExamService,
    private companyService: CompanyService,
  ) {
    this.Validator()
    this.getCompany()
  }

  ngOnInit(): void {
  }
  Validator() {
    this.examForm = this.formBuilder.group({
      tituloExamen: ['', Validators.required],
      descripcionExamen: ['', Validators.required],
      linkExamen: ['', Validators.required],
      cargo: ['', Validators.required],
      salario: ['', Validators.required],
      empresa: ['', Validators.required]
    });
  }
  saveExam() {
    if (this.examForm.valid) {
      this.examService.createExam(this.examForm.value).subscribe(
        (examCreated) => {
          alert('Libro creado correctamente')
        },
        (error) => {
          console.error('Error =>', error)
        }
      )
    } else {
      alert('Todos los campos deben estar llenos')
    }
  }
  getCompany(){
    this.companyService.getAll().subscribe(
      (comanies)=>{
        this.allCompany = comanies
      },
      (error)=>{
        console.error('Error->', error)
      }
    )
  }
  saveCompany(event){
    console.log(event.target.value)
    if (this.companyExam.includes(event.target.value)) {
      const index = this.companyExam.indexOf(event.target.value)
      this.companyExam.splice(index, 1)
      
    }else{
      this.companyExam.push(event.target.value)
    }
    let valueInput: any = ''
    if (this.companyExam.length > 0) {
      valueInput = this.companyExam
    }
    this.examForm.get('companies').setValue(valueInput)
  }
}
