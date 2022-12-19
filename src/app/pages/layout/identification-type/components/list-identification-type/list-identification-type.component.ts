import { IdentificationTypeService } from './../../../../../services/identificationType/identification-type.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { iIdType } from 'src/app/core/interfaces/device.interfaces';
import { IIdentificationTypeData } from 'src/app/core/interfaces/identificationType.interfaces';
import { IdentificationtypeService } from 'src/app/core/services/identificationtype/identificationtype.service';
import { CreateIdentificationTypeComponent } from '../create-identification-type/create-identification-type.component';


@Component({
  selector: 'app-list-identification-type',
  templateUrl: './list-identification-type.component.html',
  styleUrls: ['./list-identification-type.component.scss'],
})
export class ListIdentificationTypeComponent implements OnInit {
  displayedColumns: string[] = ['abreviatura', 'descripcion', 'actions'];
  dataSource = new MatTableDataSource();
  listIdType: iIdType[] = [];
  constructor(
    private dialog: MatDialog,
    private idTypeService: IdentificationtypeService
  ) {}

  ngOnInit(): void {
    this.getAllIdentificationType();
  }

  addIdType() {
    const dialogRef = this.dialog.open(CreateIdentificationTypeComponent, {
      width: '750px',
      height: '75%',
      data: {},
    });
  }

  getAllIdentificationType() {
    this.idTypeService
      .getAllIdentificationtype()
      .subscribe((data: IIdentificationTypeData[]) => {
        let listData: IIdentificationTypeData[] = [];
        data.forEach((element) => {
          listData.push({
            abreviatura: element.abreviatura,
            descripcion: element.descripcion,
          });
        });
        this.dataSource.data = listData;
      });
  }

  async clickDelete(iIdentificateType: IIdentificationTypeData){
    await this.idTypeService.deleteIdentificationType (iIdentificateType)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
