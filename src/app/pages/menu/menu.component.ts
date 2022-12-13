import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public user: UserService, public auth: Auth) { }

  ngOnInit(): void {
  }

}
