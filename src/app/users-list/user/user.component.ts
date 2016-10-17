import { Component, Input } from '@angular/core';
import {IUser} from "../../shared/interfaces/user.interface";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  public user: IUser;

  constructor() {}
}
