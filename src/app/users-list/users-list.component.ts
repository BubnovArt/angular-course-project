import { Component, Input } from '@angular/core';
import {IUser} from "../shared/interfaces/user.interface";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  public users: IUser[] = [
    {
      name: 'Artem',
      mood: 'I am here',
      avatar: 'http://i.imgur.com/0IFYXC6t.jpg',
      status: 'Online'
    },
    {
      name: 'Petya',
      mood: 'Relaxing...',
      avatar: 'http://bootdey.com/img/Content/avatar/avatar1.png',
      status: 'Offline'
    },
    {
      name: 'Masha',
      mood: 'Cooking',
      avatar: 'http://bootdey.com/img/Content/avatar/avatar2.png',
      status: 'Busy'
    },
    {
      name: 'Igor',
      mood: 'Sleeping',
      avatar: 'http://bootdey.com/img/Content/avatar/avatar3.png',
      status: 'Offline'
    },
    ];

    @Input()
    public val: string;

    public onInputKeyup(event) {
      this.val = event;
    }
}
