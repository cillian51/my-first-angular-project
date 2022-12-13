import { Component, Input, OnInit } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';
import { PagesService } from 'src/app/services/pages.service';
import { Firestore, setDoc, doc} from '@angular/fire/firestore';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input('cequonveut') jeRecoisCeQueJaiDecideDeTransmettre:string = ""

  constructor(public user: UserService, public auth:Auth, private bdd : Firestore) { }

  ngOnInit(): void {
  }

  
}
