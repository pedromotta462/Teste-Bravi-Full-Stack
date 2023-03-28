import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';
import { interfaceContacts } from './interfaceContacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contactApp';
  consultId: number = 0;

  contactName: string = "";
  contactFone: string = "";
  contactEmail: string = "";

  contactUpdateId: number = 0;
  contactUpdateName: string = "";
  contactUpdateFone: string = "";
  contactUpdateEmail: string = "";

  deleteId: number = 0;


  constructor(private contactService: ContactService) { }

  getAllContacts(){
    this.contactService.getAll()
      .then(contacts => console.log(contacts))
      .catch(error => console.error(error));
  }

  getContactbyId(){
    this.contactService.getbyId(this.consultId)
      .then(contact => console.log(contact))
      .catch(error => console.error(error));
  }

  addContact(){
    const contact: interfaceContacts ={
      name: this.contactName,
      fone: this.contactFone,
      email: this.contactEmail
    };
    this.contactService.addOne(contact)
      .then(contact => console.log("Contato Adicionado!", contact))
      .catch(error => console.error(error));
  }

  updateContact(){
    const contact: interfaceContacts ={
      id: this.contactUpdateId,
      name: this.contactUpdateName,
      fone: this.contactUpdateFone,
      email: this.contactUpdateEmail
    };
    this.contactService.updateOne(contact)
      .then(contact => console.log("Contato Atualizado!", contact))
      .catch(error => console.error(error));
  }

  deleteContact(){
    this.contactService.deleteOne(this.deleteId)
    .then(contact => console.log("Contato Deletado!", contact))
    .catch(error => console.error(error));
  }

}
