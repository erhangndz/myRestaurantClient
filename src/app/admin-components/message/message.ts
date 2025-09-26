import { Component } from '@angular/core';
import { MessageService } from '../../_services/message-service';
import { MessageModel } from '../../_models/messageModel';

@Component({
  selector: 'app-message',
  standalone: false,
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class Message {

constructor(private messageService: MessageService){
  this.getAll();
}

messages:MessageModel[];
unreadMessages:MessageModel[];
readMessages:MessageModel[];


getAll(){
  this.messageService.getAll().subscribe({
    next: values => this.messages = values,
    error: err => console.log(err)
  })
}


}
