import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentificationtypeService } from './services/identificationtype/identificationtype.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  providers: [IdentificationtypeService],
  imports: [CommonModule],
})
export class CoreModule {}
