import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss'],
})
export class CreateUsersComponent implements OnInit {
  formCreateUser: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formCreateUser = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      idType: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
      dateAdmission: ['', [Validators.required]],
      assignedDevice: ['']
    });
  }

  ngOnInit(): void {}

  send(): any {}
}
