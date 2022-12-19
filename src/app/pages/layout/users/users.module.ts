import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

import { UsersComponent } from './users.component';
import { CreateUsersComponent } from './create-users/create-users.component';

@NgModule({
  declarations: [
    UsersComponent,
    CreateUsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[]
})
export class UsersModule { }
