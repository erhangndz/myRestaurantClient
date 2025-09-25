import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageModel } from "../_models/messageModel";



@Injectable({
  providedIn :'root'
})

export class MessageService{

  constructor(private http : HttpClient){}

  baseUrl="https://localhost:7000/api/messages/";


create(model:MessageModel){
return this.http.post(this.baseUrl,model)
}


}
