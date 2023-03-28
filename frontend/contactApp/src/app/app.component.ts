import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contactApp';

  constructor(private contactService: ContactService) { }

  getAllContacts(){
    this.contactService.getAll()
      .then(contacts => console.log(contacts))
      .catch(error => console.error(error));
  }


}
