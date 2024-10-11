import { combineReducers } from 'redux'; // Correct package
import { languageReducer } from './reducers/languageReducer';

const rootReducer = combineReducers({
    language: languageReducer,
});

export default rootReducer;
