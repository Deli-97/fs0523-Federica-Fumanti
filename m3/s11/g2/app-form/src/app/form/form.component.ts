import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormArray, FormBuilder, FormControl, ValidationErrors, Validators, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      nome: this.fb.control(null, [Validators.required]),
      cognome: this.fb.control(null, [Validators.required]),
      authData: this.fb.group({
        email: this.fb.control(
          null,
          [Validators.required, Validators.email],
          this.emailEsistente
        ),
        password: this.fb.control(null, [Validators.required])
      })
    }
    )
  }

  emailEsistente(formC:AbstractControl){

    return new Promise<ValidationErrors|null>((resolve, reject) => {

      setTimeout(() => {

        if(formC.value == 'admin@admin.it'){

          resolve({
            invalid: true,
            message: 'Email già presente'
          })

        }

        reject(null)


      },2000)

    });
}

isValid(fieldName:string){
  return this.form.get(fieldName)?.valid
}

isTouched(fieldName:string){
  return this.form.get(fieldName)?.touched
}

isValidAndTouched(fieldName:string){
  return this.isValid(fieldName) && this.isTouched(fieldName)
}

getErrors(fieldName:string){
  return this.form.get(fieldName)?.errors
}

getCustomMessage(fieldName:string){
  return this.form.get(fieldName)?.errors!['message']
}

}
