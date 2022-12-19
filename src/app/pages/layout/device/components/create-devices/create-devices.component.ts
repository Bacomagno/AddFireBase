import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-devices',
  templateUrl: './create-devices.component.html',
  styleUrls: ['./create-devices.component.scss'],
})
export class CreateDevicesComponent implements OnInit {
  formAddDevice: FormGroup;

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.formAddDevice = this.formBuilder.group({
      marca: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: [''],
      serial: ['', [Validators.required]],
      mac: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  returnListDevice() {
    console.log('atras');
    // this.router.navigate(['/device/list']);
  }
}
