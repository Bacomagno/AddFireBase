import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListIdentificationTypeComponent } from './components/list-identification-type/list-identification-type.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListIdentificationTypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentificationTypeRoutingModule {}
