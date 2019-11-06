import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {save} from 'redux-localstorage-simple';
import {reducer as formReducer} from 'redux-form';
import listsReducer from "./listsReducer";


let reducers = combineReducers(
	{
		lists: listsReducer,
		form: formReducer,
	});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, compose(
	composeEnhancers(
		applyMiddleware(thunkMiddleware,save({namespace: 'lists'}))
	)));


export default store;
