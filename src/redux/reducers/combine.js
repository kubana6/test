import { combineReducers } from 'redux';
import { content } from './dataTable';
const createRootReducer = () =>
  combineReducers({
    content
  });
export default createRootReducer;
