import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css']
})
export class MentionsComponent implements OnInit {

  constructor(public pagesServ:PagesService) { }

  ngOnInit(): void {
    console.log(this.pagesServ.contenu.mentions);
  };

}
