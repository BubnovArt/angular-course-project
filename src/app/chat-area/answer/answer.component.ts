import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'answer',
  templateUrl: 'answer.component.html',
  styleUrls: ['answer.component.css']
})
export class AnswerComponent {
  @Output() messageEmitter: EventEmitter<string> = new EventEmitter();

  public sendMessage(text): void {
    this.messageEmitter.emit(text.value);
    text.value = "";
  }
}
