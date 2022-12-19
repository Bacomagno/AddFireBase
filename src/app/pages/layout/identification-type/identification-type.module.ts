import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentificationTypeRoutingModule } from './identification-type-routing.module';
import { ListIdentificationTypeComponent } from './components/list-identification-type/list-identification-type.component';
import { CreateIdentificationTypeComponent } from './components/create-identification-type/create-identification-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    ListIdentificationTypeComponent,
    CreateIdentificationTypeComponent,
  ],
  imports: [
    CommonModule,
    IdentificationTypeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [CreateIdentificationTypeComponent],
  entryComponents: [CreateIdentificationTypeComponent],
})
export class IdentificationTypeModule {}
