import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Contact} from "../contact/contact.model";

import { Consts } from '../../utils/consts.util';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  loggedInUser: String;

  contact : Contact;

  cities: SelectItem[];

  emailAlreadyExists: Boolean = false;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cities = [
      {label:'Select City', value:null},
      {label:'Sfax', value:'Sfax'},
      {label:'Tunis', value:'Tunis'},
      {label:'Sousse', value:'Sousse'},
      {label:'Gabes', value:'Gabes'},
      {label:'Nabel', value:'Nabel'}
    ];
    this.getContact(this.route.snapshot.params['id']);
    this.emailAlreadyExists = false;
  }

  getContact(id) {
    this.http.get(Consts.API_URL + Consts.CONTACTS + '/'+id).subscribe((data : Contact)=> {
      this.contact = data;
    });
  }

  updateContact(data) {
    this.http.post(Consts.API_URL + Consts.CONTACTS + '/' + data.id, data)
         .subscribe(res => {
          if(res==null) {
            this.emailAlreadyExists = true;
          } else {
            let id = res['data.id'];
            this.router.navigate(['/contact-detail', data.id]);
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
