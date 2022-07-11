import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';

  success_msg = false;


  contacts=[
    {
    'firstname':'ABC',
   'lastname' :'tutorials',
   'contactsId':1234
    }, {
      'firstname': 'DEF',
      'lastname': 'tutorials',
      'contactsId': 5432
    }
]

 superhero = 'Batm'
 styleProp = 'red' //string write in double quote
}
