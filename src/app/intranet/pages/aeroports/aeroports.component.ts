import { AeroportI } from './../../modeles/compagnie-i';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-aeroports',
  templateUrl: './aeroports.component.html',
  styleUrls: ['./aeroports.component.css']
})
export class AeroportsComponent implements OnInit {

  aeroports: Array<AeroportI> = this.aeroportServ.aeroports;
  pageSize = 7;
  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  constructor(private readonly http: HttpClient,public aeroportServ:CompagnieService) { }

  ngOnInit(): void {
  
  }

  // Fonction appelée lorsqu'on change de page
  onPageChange(event:PageEvent) {
    // Mettre à jour l'index de la page
    if (event.previousPageIndex === undefined) {
      // No previous page index, so just update the current page index
      this.paginator.pageIndex = event.pageIndex;
    } else if (event.pageIndex > event.previousPageIndex) {
      // Skip 2 pages forward
      this.paginator.pageIndex = event.pageIndex + 1;
    } else if (event.pageIndex < event.previousPageIndex) {
      // Skip 2 pages backward
      this.paginator.pageIndex = event.pageIndex - 1;
    }
  }   


}
