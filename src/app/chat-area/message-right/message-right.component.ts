import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-right',
  templateUrl: 'message-right.component.html',
  styleUrls: ['message-right.component.css']
})
export class MessageRightComponent {
  @Input()
  public newMessage: string;

  @Input()
  public messageDate: string;

  public currentDate = new Date();
}
