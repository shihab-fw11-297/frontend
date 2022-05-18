import { createStore,combineReducers ,applyMiddleware,compose} from 'redux';
import {reducer as calculatorReducer} from "./calculatorReducer";
import {authReducer as Authreducer} from "./authReducer";

const rootReducer = combineReducers({
    search: calculatorReducer,
    auth: Authreducer
});

const middlewere1 = (store) => (next) => (action) =>{
    console.log('mid 1');
    return next(action);
};

export const store = createStore(rootReducer ,compose(applyMiddleware(middlewere1),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));