import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position
);

export const Title = styled.h1`
  font-family: 'Rubik One', sans-serif;
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  background: rgb(212, 166, 252);
  margin-bottom: 10px;
  color: white;
  border-radius: 5px;
  mix-blend-mode: multiply;
  padding: 5px 10px;
`;
export const TitleCont = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-family: 'Rubik One', sans-serif;
  font-size: 25px;
  text-transform: uppercase;
  background: rgb(212, 166, 252);
  color: white;
  border-radius: 5px;
  mix-blend-mode: multiply;
  padding: 5px 10px;
`;
