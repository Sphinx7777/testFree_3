import {load} from 'redux-localstorage-simple';

const SHOW_DESCRIPTION = '/listsReducer///SHOW_DESCRIPTION';


let data = load({namespace: 'lists'});
let initialState = data.lists;

if (!initialState || !initialState.listsArr || !initialState.listsArr.length) {
	initialState = {
		listsArr: [],
		editMode:false
	};
}


const listsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_DESCRIPTION: {
			return {...state}
		}
		default:
			return state;
	}
};


export const setShowDescription = (date) => ({type: SHOW_DESCRIPTION, ...date});




export default listsReducer;