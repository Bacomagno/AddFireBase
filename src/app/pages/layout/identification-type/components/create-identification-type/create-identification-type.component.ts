import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-identification-type',
  templateUrl: './create-identification-type.component.html',
  styleUrls: ['./create-identification-type.component.scss']
})
export class CreateIdentificationTypeComponent {

  // https://regexr.com/

  identificationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.identificationForm = this.formBuilder.group({
      idtype: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  send(): void {
    console.log('send');
  }

  close(): void {
    console.log('close');
  }
}
