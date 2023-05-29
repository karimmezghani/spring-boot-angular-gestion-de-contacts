import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Contact} from "../contact/contact.model";

import { Consts } from '../../utils/consts.util';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  loggedInUser: String;

  contact : Contact;

  cities: SelectItem[];

  emailAlreadyExists: Boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.cities = [
      {label:'Select City', value:null},
      {label:'Sfax', value:'Sfax'},
      {label:'Tunis', value:'Tunis'},
      {label:'Sousse', value:'Sousse'},
      {label:'Gabes', value:'Gabes'},
      {label:'Nabel', value:'Nabel'}
    ];
    this.contact = new Contact();
    this.emailAlreadyExists = false;
  }

  saveContact() {
    this.http.post(Consts.API_URL + Consts.CONTACTS, this.contact)
      .subscribe(res => {
          if(res==null) {
            this.emailAlreadyExists = true;
          } else {
            this.router.navigate(['/contact']);
          }
        }, (err) => {
          console.log(err);
        }
      );
  }

  onChangeCity(event){
    this.contact.city = event.value;
  }

  setStatus(event) {
    if ( event.target.checked ) {
        this.contact.disabled = "true";
   } else {
     this.contact.disabled = "false";
   }
}

}
