import React, { Component } from 'react';
import { ContactsForm } from 'components/ContactsForm';
import { ContactsList } from 'components/ContactsList';

import { Box, Title, TitleCont } from './components/Box/Box.styled';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContactInfo = contactObj => {
    if (
      this.state.contacts.find(
        cont => cont.name.toLowerCase() === contactObj.name.toLowerCase()
      )
    ) {
      return alert(`${contactObj.name} is already in contacts`);
    }
    this.setState(prevStat => {
      return { contacts: [contactObj, ...this.state.contacts] };
    });
  };

  onAddFilter = e => {
    this.setState(() => {
      return { filter: e.target.value };
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDelete = contactId => {
    this.setState(prevStat => {
      return {
        contacts: prevStat.contacts.filter(cont => cont.id !== contactId),
      };
    });
  };

  render() {
    return (
      <Box
        as="section"
        m="auto"
        bg="white"
        borderRadius="8px"
        width="450px"
        p="30px"
        mt="30px"
      >
        <Box pb="40px">
          <Title>Phonebook</Title>
          <ContactsForm onAddContactInfo={this.onAddContactInfo} />
        </Box>
        <Box>
          <TitleCont>Contacts</TitleCont>
          <Filter onAddFilter={this.onAddFilter} filter={this.state.filter} />
          <ContactsList
            contactsList={this.filterContacts()}
            onDelete={this.onDelete}
          />
        </Box>
      </Box>
    );
  }
}

export default App;
