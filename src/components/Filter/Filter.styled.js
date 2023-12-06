import styled from 'styled-components';

export const FilterForm = styled.label`
  display: flex;
  flex-direction: column;
  .name {
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: rgb(212, 166, 252);
    margin-bottom: 5px;
  }
`;
export const FilterField = styled.input`
  padding: 5px;
  background-color: white;
  color: #423189;
  border: 1px solid rgb(212, 166, 252);
  border-radius: 4px;
  :hover,
  :focus {
    outline: none;
    background-color: rgb(243, 233, 252);
  }
`;
