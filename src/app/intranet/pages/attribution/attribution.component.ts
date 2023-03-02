import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.css']
})
export class AttributionComponent implements OnInit {

  //Paramètre pour filtrer les modèles
  filtreModele:string='';

  constructor(public compagnie:CompagnieService) { }

  ngOnInit(): void {
  }

}
