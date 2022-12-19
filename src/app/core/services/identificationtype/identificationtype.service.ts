import { IIdentificationTypeData } from 'src/app/core/interfaces/identificationType.interfaces';
import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class IdentificationtypeService {
  constructor(private firestore: Firestore) {}

  public getAllIdentificationtype(): Observable<IIdentificationTypeData[]> {
    const listIdentificationType = collection(this.firestore, 'application');
    return collectionData(listIdentificationType, {
      idField: 'identificationtType',
    }) as Observable<IIdentificationTypeData[]>;
  }

  addIdentificationType (identificationType: IIdentificationTypeData){
    const listIdentificationType = collection(this.firestore,'application');
    return addDoc(listIdentificationType, identificationType)
  }

  deleteIdentificationType (identificationType: IIdentificationTypeData){
    const idTypeDocRef = doc(this.firestore, `aplication/${identificationType.abreviatura}`);
    return deleteDoc (idTypeDocRef);
  }
}
