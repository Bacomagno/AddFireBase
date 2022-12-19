import { NgModule } from '@angular/core';
import { ListDevicesComponent } from './components/list-devices/list-devices.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateDevicesComponent } from './components/create-devices/create-devices.component';

const routes: Routes =[
  {path: 'list', component: ListDevicesComponent},
  {path: 'create', component: CreateDevicesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceRoutingModule { }
