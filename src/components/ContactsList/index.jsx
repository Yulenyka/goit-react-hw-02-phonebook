import React from 'react';
import PropTypes from 'prop-types';
import { ContactsListStyled, ListItem } from './ContactsList.styled';
import { Button } from '../ContactsForm/ContactsForm.styled';

export const ContactsList = ({ contactsList, onDelete }) => {
  return (
    <ContactsListStyled>
      {contactsList.map(({ name, number, id }) => (
        <ListItem key={id}>
          {name} {number}
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </ContactsListStyled>
  );
};
ContactsList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contactsList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
