package com.gestion.contacts.controllers;

import com.gestion.contacts.models.Contact;
import com.gestion.contacts.repositories.ContactRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Api(value = "/api/contacts")
@RequestMapping("/api/contacts")
public class ContactController {

    @Autowired
    ContactRepository contactRepository;

    @ApiOperation(value = "View all contacts")
    @RequestMapping(method = RequestMethod.GET)
    public List<Contact> contact() {
        return contactRepository.findAll();
    }

    @ApiOperation(value = "Create a contact")
    @RequestMapping(method = RequestMethod.POST)
    public Contact save(
            @ApiParam(value = "Contact object to add in database table", required = true)
            @RequestBody
            @Valid Contact contact) {
        if (contactRepository.getEmailCount(contact.getEmail()) == 0) {
            contactRepository.save(contact);
            return contact;
        } else {
            return null;
        }
    }

    @ApiOperation(value = "View a contact")
    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Contact show(
            @ApiParam(value = "Contact id from which contact object will retrieve", required = true)
            @PathVariable Long id) {
        return contactRepository.findOne(id);
    }

    @ApiOperation(value = "Update a contact")
    @RequestMapping(method = RequestMethod.POST, value = "/{id}")
    public Contact update(
            @ApiParam(value = "Contact object to update in database table", required = true)
            @RequestBody Contact contact) {
        Contact c = contactRepository.findOne(contact.getId());
        if (contact.getName() != null)
            c.setName(contact.getName());
        if (contact.getAddress() != null)
            c.setAddress(contact.getAddress());
        if (contact.getCity() != null)
            c.setCity(contact.getCity());
        if (contact.getPhone() != null)
            c.setPhone(contact.getPhone());
        if (contact.getEmail() != null)
            c.setEmail(contact.getEmail());
        if (contact.getGender() != null)
            c.setGender(contact.getGender());
        if (contact.getDisabled() != null)
            c.setDisabled(contact.getDisabled());
        contactRepository.save(c);
        return contact;
    }


    @ApiOperation(value = "Delete a contact")
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public String delete(
            @ApiParam(value = "Contact id from which contact object will retrieve", required = true)
            @PathVariable Long id) {
        Contact contact = contactRepository.findOne(id);
        contactRepository.delete(contact);
        return "";
    }

    @ApiOperation(value = "Delete all contacts")
    @RequestMapping(method = RequestMethod.DELETE, value = "/delete")
    public String deleteAll() {
        Iterable<Contact> contacts = contactRepository.findAll();
        contactRepository.delete(contacts);
        return "";
    }
}
