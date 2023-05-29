package com.gestion.contacts.models;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity(name = "contacts")
@ApiModel(description = "All details about the Contact. ")
@Getter
@Setter
@NoArgsConstructor
public class Contact {

    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @ApiModelProperty(notes = "The database generated contact ID", hidden = true)
    Long id;

    @NotNull
    @Size(min = 1, max = 90)
    @ApiModelProperty(notes = "The contact's name", required = true)
    String name;

    @Size(min = 0, max = 90)
    @ApiModelProperty(notes = "The contact's address")
    String address;

    @NotEmpty
    @NotNull
    @Size(min = 1, max = 30)
    @Pattern(regexp = "^(Sfax|Tunis|Sousse|Gabes|Nabel)$")
    @ApiModelProperty(notes = "The contact's city", required = true, allowableValues = "Sfax|Tunis|Sousse|Gabes|Nabel")
    String city;

    @Size(min = 0, max = 30)
    @ApiModelProperty(notes = "The contact's phone")
    String phone;

    @NotNull
    @Size(min = 1, max = 90)
    @ApiModelProperty(notes = "The contact's email (must be unique)", required = true, allowableValues = "mustBeUnique@mail.com")
    String email;

    @NotNull
    @Size(min = 1, max = 1)
    @Pattern(regexp = "^(m|f)$")
    @ApiModelProperty(notes = "The contact's gender", required = true, allowableValues = "m|f")
    String gender;

    @NotNull
    @Size(min = 4, max = 5)
    @Pattern(regexp = "^(false|true)$")
    @ApiModelProperty(notes = "Is contact disabled?", required = true, allowableValues = "false|true")
    String disabled;

}
