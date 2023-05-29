package com.gestion.contacts.service;


import com.gestion.contacts.models.Contact;

import java.util.List;

public interface IContactService {
     List<Contact> getAllContacts();
     Contact getContactById(Long contactId);
     List<Contact> getContactByName(String name);
     boolean addContact(Contact contact);
     void updateContact(Contact contact);
     void deleteContact(Contact contact);
}
