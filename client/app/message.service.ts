import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Message } from "./message.model";

@Injectable()
export class MessageService {
    constructor(private http: Http) {}

    getMessages(): Observable<any> {
        return this.http.get('http://localhost:3000/messages')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Message[] = [];
                let message;
                for (let element of extracted.data) {
                    console.log(element.content);
                    message = new Message(element.firstName, element.lastName, element.empId, element.num ,element.job);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }

    saveMessage(message: Message): Observable<any> {
        console.log(message);
        const body = JSON.stringify(message);
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', body, {headers: headers});
    }
    
    deleteServiceWithId( key: string, val: string): Observable<any> {
    console.log(key);
    console.log(val);
    return this.http
      .delete('http://localhost:3000/messagedelete' + "/?" + key + "=" + val);
  }
}