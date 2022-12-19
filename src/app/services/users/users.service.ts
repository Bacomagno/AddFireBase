import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class UsersService {

  private userList: IUser[] = [
    { position: 1, name: 'Hydrogen', identificate: 10079, symbol: 'H' },
    { position: 2, name: 'Helium', identificate: 40026, symbol: 'He '},
    { position: 3, name: 'Lithium', identificate: 6941, symbol: 'Li '},
    { position: 4, name: 'Beryllium', identificate: 90122, symbol: 'Be '},
    { position: 5, name: 'Boron', identificate: 10811, symbol: 'B' },
    { position: 6, name: 'Carbon', identificate: 120107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', identificate: 140067, symbol: 'N' },
    { position: 8, name: 'Oxygen', identificate: 159994, symbol: 'O' },
    { position: 9, name: 'Fluorine', identificate: 189984, symbol: 'F' },
    { position: 10, name: 'Neon', identificate: 201797, symbol: 'Ne '}
  ];

  private sUrl = `${environment.apiTest}/users`;
  
  constructor(private http: HttpClient) { }

  getUsersList(): Observable<IUser[]> {
    return of(this.userList);
    // return this.http.get<IUser[]>(this.sUrl);
  }

}
