import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterForm, FilterField } from './Filter.styled';

class Filter extends Component {
  render() {
    return (
      <FilterForm>
        <span className="name">Find contacts by name</span>
        <FilterField
          onChange={this.props.onAddFilter}
          type="text"
          name="filter"
          value={this.props.filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FilterForm>
    );
  }
}

export default Filter;
Filter.propTypes = {
  onAddFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
