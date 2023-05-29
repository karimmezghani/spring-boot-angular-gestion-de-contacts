import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contacts/contact/contact.component';

import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactCreateComponent } from './contacts/contact-create/contact-create.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';

import {CommonModule} from '@angular/common';

import {TabViewModule} from 'primeng/components/tabview/tabview';

import {GrowlModule} from 'primeng/components/growl/growl';
import {HttpModule} from '@angular/http';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {NavbarComponent} from './core/components/menu/navbar.component';
import {ButtonModule} from 'primeng/primeng';

import {SplitButtonModule} from 'primeng/splitbutton';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact List' }
  },
  {
    path: 'contact-detail/:id',
    component: ContactDetailComponent,
    data: { title: 'Contact Details' }
  },
  {
    path: 'contact-create',
    component: ContactCreateComponent,
    data: { title: 'Create Contact' }
  },
  {
    path: 'contact-edit/:id',
    component: ContactEditComponent,
    data: { title: 'Edit Contact' }
  },
  {
    path: '',
    redirectTo: '/contact',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactCreateComponent,
    ContactEditComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    TabViewModule,
    ButtonModule,
    GrowlModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
)
],
providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
bootstrap: [AppComponent],
exports: []
})
export class AppModule { }
