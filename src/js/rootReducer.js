import { combineReducers } from 'redux';
import inputReducer from './components/Inputs/inputReducer'

const rootReducer = combineReducers({
    cityData: inputReducer
});

export default rootReducer;
