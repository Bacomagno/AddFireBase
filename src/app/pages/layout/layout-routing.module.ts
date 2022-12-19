import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'device',
        loadChildren: () =>import('./device/device.module').then((module) => module.DeviceModule)
      },
      {
        path: 'identificationType',
        loadChildren: () =>import('./identification-type/identification-type.module').then((module) => module.IdentificationTypeModule)
      },
      {
        path: 'users',
        loadChildren: () =>import('./users/users.module').then((module) => module.UsersModule)
      },
      { path: '', redirectTo: 'users', pathMatch: 'full' }
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
