import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRowDef, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTreeModule,
    MatDialogModule,
    ScrollingModule,
    MatBottomSheetModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports:[
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTreeModule,
    MatDialogModule,
    ScrollingModule,
    MatBottomSheetModule,
    MatSelectModule,
    MatRowDef,
    MatDialogModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
