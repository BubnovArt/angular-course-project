/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Components */
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './users-list/user/user.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import { AnswerComponent } from './chat-area/answer/answer.component';
import { MessageLeftComponent } from './chat-area/message-left/message-left.component';
import { MessageRightComponent } from './chat-area/message-right/message-right.component';
import { UsersSearchComponent } from './users-list/users-search/users-search.component';

/* Pipes */
import {UsersPipe} from "./users-list/pipes/users.pipe";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserComponent,
    ChatAreaComponent,
    AnswerComponent,
    MessageLeftComponent,
    MessageRightComponent,
    UsersSearchComponent,
    UsersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
