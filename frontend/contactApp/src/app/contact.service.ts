import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { interfaceContacts } from './interfaceContacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<interfaceContacts[]>(`${API_PATH}Contacts`).toPromise();
  }

  getbyId(id: number){
    return this.httpClient.get<interfaceContacts>(`${API_PATH}Contacts/${id}`).toPromise();
  }

  addOne(contact: interfaceContacts){
    return this.httpClient.post<interfaceContacts>(`${API_PATH}Contacts`, contact).toPromise();
  }

  updateOne(contact: interfaceContacts){
    return this.httpClient.put<interfaceContacts>(`${API_PATH}Contacts/${contact.id}`, contact).toPromise();
  }

  deleteOne(id: number){
    return this.httpClient.delete<void>(`${API_PATH}Contacts/${id}`).toPromise();
  }

}
