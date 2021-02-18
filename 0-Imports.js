/**
Export default inf file 'Shared/Utils/isFunction'
*/


const isFunction = (it) => typeof it === 'function';
export default isFunction;

/**
Import default
*/

import isFunction from 'Shared/Utils/isFunction';



/*
Export in file Styled.js
*/

export const ConfigButton = styled.button`
  float: right;
  display: flex;
  justify-content: center;
  width: 60px;
  height: 100%;
  padding: 0;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #363b4d;
`;
/*
Import
*/
import { ConfigButton } from './Styled';