package com.gestion.contacts.repositories;

import com.gestion.contacts.models.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, Long> {

    @Query("SELECT COUNT(email) FROM contacts where email=:email")
    Long getEmailCount(@Param("email") String email);

    List<Contact> findByNameIgnoreCaseContaining(String name);
}
