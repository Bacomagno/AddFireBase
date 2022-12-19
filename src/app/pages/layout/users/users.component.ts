import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IUser } from 'src/app/core/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';
import { CreateUsersComponent } from './create-users/create-users.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  columns: string[] = ['position', 'name', 'Identificate', 'symbol'];
  userList: IUser[] = [];

  constructor(public usersService: UsersService,
              public dialog: MatDialog) {

    usersService.getUsersList().subscribe(data => {
      this.userList = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addUsers(id: number) {
    const dialogRef = this.dialog.open(CreateUsersComponent, {
      width: '750px',
      height: '75%',
      data: { idUser: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log (`Device add: ${result}`);
    });
  }
}
