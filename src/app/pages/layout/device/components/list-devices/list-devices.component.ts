import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateDevicesComponent } from '../create-devices/create-devices.component';
import { MatTableDataSource } from '@angular/material/table';
import { iDevice } from 'src/app/core/interfaces/device.interfaces';


@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.scss']
})

export class ListDevicesComponent implements OnInit {

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'marca',
    'nombre',
    'descripcion',
    'serial',
    'mac'
  ];
  dataSource = new MatTableDataSource();
  listDevice: iDevice[] = [];


  constructor(
    public dialog: MatDialog,
    private router:Router,
    private activedrouter:ActivatedRoute,
  ) {}


  addData(id: number) {
    const dialogRef = this.dialog.open(CreateDevicesComponent, {
      width: '750px',
      height: '75%',
      data: { idDevice: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log (`Device add: ${result}`);
    });
  }

  removeData() {
  }


}



