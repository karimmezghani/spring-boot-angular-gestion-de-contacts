import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {Contact} from "../contact/contact.model";

import { Consts } from '../../utils/consts.util';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact : Contact;
  male: boolean = true; 
  disabled: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getContactDetail(this.route.snapshot.params['id']);
  }

  getContactDetail(id) {
    this.http.get(Consts.API_URL + Consts.CONTACTS + '/' + id).subscribe((data : Contact)=> {
      this.contact = data;
      this.getGender();
      this.getDisabled();
    });
  }

  deleteContact(id) {
    if(confirm("Are you sure to delete?")) {
      this.http.delete(Consts.API_URL + Consts.CONTACTS + '/' + id)
        .subscribe(res => {
            this.router.navigate(['/contact']);
          }, (err) => {
            console.log(err);
          }
        );
    }
  }

  getGender():void {
    if(this.contact.gender == "m")
      this.male = true;
    else
      this.male = false;
  }

  getDisabled():void {
    if(this.contact.disabled == "false")
      this.disabled = false;
    else
      this.disabled = true;
  }

}


