import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { EditContactsComponent } from './edit-contact/edit-contacts.component';
import { DeleteContactsComponent } from './delete-contact/delete-contacts.component';
import { ListContactsComponent } from './list-contact/list-contacts.component';
import { ViewContactsComponent } from './view-contact/view-contacts.component';



@NgModule({
  declarations: [
    AddContactsComponent,
    EditContactsComponent,
    DeleteContactsComponent,
    ListContactsComponent,
    ViewContactsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
