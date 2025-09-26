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
  this.getUnreadMessages();
  this.getReadMessages();
}

messages:MessageModel[];
unreadMessages:MessageModel[];
readMessages:MessageModel[];
messageDetail:MessageModel= new MessageModel();


getAll(){
  this.messageService.getAll().subscribe({
    next: values => this.messages = values,
    error: err => console.log(err)
  })
};

getReadMessages(){
  this.messageService.getReadMessages().subscribe({
    next: values => this.readMessages= values
  })
}

getUnreadMessages(){
  this.messageService.getUnreadMessages().subscribe({
    next: values => this.unreadMessages= values
  })
}

onSelected(model:MessageModel){
this.messageDetail= model;

this.messageService.markAsRead(model).subscribe({
  error: err=> console.log(err),
  complete: () => {
      this.getUnreadMessages();
      this.getReadMessages();
  }
})



}


}
