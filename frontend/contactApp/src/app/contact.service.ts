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

}
