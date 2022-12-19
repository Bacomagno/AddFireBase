import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDevicesComponent } from './components/create-devices/create-devices.component';
import { ListDevicesComponent } from './components/list-devices/list-devices.component';
import { ListTrademarkComponent } from './components/list-trademark/list-trademark.component';
import { CreateTrademarkComponent } from './components/create-trademark/create-trademark.component';
import { DeviceRoutingModule } from './device-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateDevicesComponent,
    ListDevicesComponent,
    ListTrademarkComponent,
    CreateTrademarkComponent,
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    MaterialModule
  ]
})
export class DeviceModule { }
