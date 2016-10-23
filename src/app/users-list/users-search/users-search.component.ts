import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'users-search',
  templateUrl: 'users-search.component.html',
  styleUrls: ['users-search.component.css']
})
export class UsersSearchComponent {

  @Output() InputKeyup: EventEmitter<string> = new EventEmitter();

  constructor() {}

  public onFilter(value:string) {
    this.InputKeyup.emit(value);
  }
}
