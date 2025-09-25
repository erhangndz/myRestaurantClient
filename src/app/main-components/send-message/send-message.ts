import { Component } from '@angular/core';
import { MessageService } from '../../_services/message-service';
import { MessageModel } from '../../_models/messageModel';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'send-message',
  standalone: false,
  templateUrl: './send-message.html',
  styleUrl: './send-message.css'
})
export class SendMessage {

constructor(private messageService:MessageService,
            private route: Router){}

newMessage:MessageModel= new MessageModel();

send(){

  this.messageService.create(this.newMessage).subscribe({
    error: err=> console.log(err),
    complete: () => {
      Swal.fire({
        title:'Mesajınız başarıyla gönderildi.',
        icon:'success',
        timer:1000
      });

      this.route.navigate([''])


    }
  })


}


}
