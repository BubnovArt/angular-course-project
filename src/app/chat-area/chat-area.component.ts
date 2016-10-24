import {Component, Output} from '@angular/core';

@Component({
  selector: 'chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent {
  @Output()
  public newMessage: string;
  public messageDate = new Date();

  public onMessage(message) {
    this.newMessage = message;
    //console.log('Emitted: ' + this.newMessage + this.messageDate);
  }
}
