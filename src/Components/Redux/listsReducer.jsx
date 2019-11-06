import {load} from 'redux-localstorage-simple';

const SHOW_DESCRIPTION = '/listsReducer///SHOW_DESCRIPTION';
const SHOW_FORM_EDIT = '/listsReducer///SHOW_FORM_EDIT';
const REMOVE_DESCRIPTION = '/listsReducer///REMOVE_DESCRIPTION';
const ADD_NEW_FIELD = '/listsReducer///ADD_NEW_FIELD';
const SET_CHANGE_CONTENT = '/listsReducer///SET_CHANGE_CONTENT';
const SET_CHANGE_ITEM_ORDER = '/listsReducer///SET_CHANGE_ITEM_ORDER';
const SET_NEW_SUBLIST = '/listsReducer///SET_NEW_SUBLIST';
const REMOVE_SUBLIST = '/listsReducer///REMOVE_SUBLIST';
const SET_SHOW_DESCRIPTION_SUBLIST = '/listsReducer///SET_SHOW_DESCRIPTION_SUBLIST';
const SET_SHOW_FORM_EDIT_SUBLIST = '/listsReducer///SET_SHOW_FORM_EDIT_SUBLIST';
const SET_CHANGE_CONTENT_SUBLIST = '/listsReducer///SET_CHANGE_CONTENT_SUBLIST';



let data = load({namespace: 'lists'});
let initialState = data.lists;

if (!initialState || !initialState.listsArr || !initialState.listsArr.length) {
	initialState = {
		listsArr: [

			[
				{id: 1, name: '1', phone: '111 11 11 11', email: '111@gmail.com', showDesc: false, showForm: false},
				{id: 2, name: '11', phone: '111 11 11 11', email: '111@gmail.com', showDesc: false, showForm: false},
				{id: 3, name: '111', phone: '111 11 11 11', email: '111@gmail.com', showDesc: false, showForm: false}
			]

			,
			[{id: 4, name: '2', phone: '222 22 22 22', email: '222@gmail.com', showDesc: false, showForm: false},
				{id: 5, name: '22', phone: '222 22 22 22', email: '222@gmail.com', showDesc: false, showForm: false},
				{id: 6, name: '222', phone: '222 22 22 22', email: '222@gmail.com', showDesc: false, showForm: false}
			]
			,
			[{id: 7, name: '3', phone: '333 33 33 33', email: '333@gmail.com', showDesc: false, showForm: false},
				{id: 8, name: '33', phone: '333 33 33 33', email: '333@gmail.com', showDesc: false, showForm: false},
				{id: 9, name: '333', phone: '333 33 33 33', email: '333@gmail.com', showDesc: false, showForm: false}
			]
			,
		],

		editField: false,
		editMode: false
	};
}


const listsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_DESCRIPTION: {
			return {
				...state, ...state.listsArr[action.numberArr] =
					state.listsArr[action.numberArr].map(list => {
						if (list.id === action.id) {
							list.showDesc = !list.showDesc;
							return list;
						}
						return list;
					})
			}
		}
		case SHOW_FORM_EDIT: {
			return {
				...state, ...state.listsArr[action.numberArr] =
					state.listsArr[action.numberArr].map(list => {
						if (list.id === action.id) {
							list.showForm = !list.showForm;
							return list;
						}
						return list;
					}), editMode: !state.editMode
			}
		}
		case SET_CHANGE_CONTENT: {
			return {
				...state, ...state.listsArr[action.numberArr] =
					state.listsArr[action.numberArr].map(list => {
						if (list.id === action.id) {
							list.email = action.email;
							list.name = action.name;
							list.phone = action.phone;
							list.showForm = false;
							return list;
						}
						return list;
					}), editMode: false
			}
		}
		case REMOVE_DESCRIPTION: {
			return {
				...state, ...state.listsArr, ...state.listsArr[action.numberArr] =
					state.listsArr[action.numberArr].filter(list => list.id !== action.id
					)
			}
		}
		case ADD_NEW_FIELD: {
			return {
				...state, ...state.listsArr, ...state.listsArr[action.numberArr].push(action.newField),
				editField: !state.editField
			}
		}
		case SET_CHANGE_ITEM_ORDER: {
			return {
				...state, ...state.listsArr, ...state.listsArr[action.numberArr] = action.newArray
			}
		}
		case SET_NEW_SUBLIST: {
			return {
				...state, ...state.listsArr[action.numberArr] =
					state.listsArr[action.numberArr].map(list => {
						if (list.id === action.id) {
							Object.assign(list, action.newSubList);
							return list;
						}
						return list;
					}), editMode: false
			}
		}
		case REMOVE_SUBLIST: {
			return {
				...state, ...state.listsArr, ...state.listsArr[action.numberArr] =
					state.listsArr[action.numberArr].map(list => {
						if (list.id === action.id) {

							list.sublist = list.sublist.filter(sub => sub.id !== action.id);
							if (!list.sublist.length) {
								list.sublist = false
							}
							return list
						}
						return list
					})
			}
		}
		case SET_SHOW_DESCRIPTION_SUBLIST: {
			return {
				...state, ...state.listsArr, ...state.listsArr[action.numberArr] =
					state.listsArr[action.numberArr].map(list => {
						if (list.id === action.id) {

							list.sublist = list.sublist.map(sub => {

								if(sub.id === action.id){
									sub.showDesc = !sub.showDesc
								}
							return sub

						});

							return list
						}
						return list
					})
			}
		}
		case SET_SHOW_FORM_EDIT_SUBLIST: {
			return {
				...state, ...state.listsArr, ...state.listsArr[action.numberArr] =
					state.listsArr[action.numberArr].map(list => {
						if (list.id === action.id) {

							list.sublist = list.sublist.map(sub => {

								if(sub.id === action.id){
									sub.showForm = !sub.showForm
								}
							return sub

						});

							return list
						}
						return list
					}),editMode: !state.editMode
			}
		}
		case SET_CHANGE_CONTENT_SUBLIST: {
			return {
				...state, ...state.listsArr, ...state.listsArr[action.numberArr] =
					state.listsArr[action.numberArr].map(list => {
						if (list.id === action.id) {

							list.sublist = list.sublist.map(sub => {

								if(sub.id === action.id){
									sub.email = action.email;
									sub.name = action.name;
									sub.phone = action.phone;
									sub.showForm = false;
								}
							return sub

						});

							return list
						}
						return list
					}),editMode: false
			}
		}
		default:
			return state;
	}
};


export const setShowDescription = (date) => ({type: SHOW_DESCRIPTION, ...date});
export const setShowFormEdit = (date) => ({type: SHOW_FORM_EDIT, ...date});
export const setRemoveDescription = (date) => ({type: REMOVE_DESCRIPTION, ...date});
export const addNewField = (date) => ({type: ADD_NEW_FIELD, ...date});
export const setChangeContent = (date) => ({type: SET_CHANGE_CONTENT, ...date});
export const setChangeItemOrder = (date) => ({type: SET_CHANGE_ITEM_ORDER, ...date});
export const setNewList = (date) => ({type: SET_NEW_SUBLIST, ...date});
export const setRemoveSublist = (date) => ({type: REMOVE_SUBLIST, ...date});
export const setShowDescriptionSublist = (date) => ({type: SET_SHOW_DESCRIPTION_SUBLIST, ...date});
export const setShowFormEditSublist = (date) => ({type: SET_SHOW_FORM_EDIT_SUBLIST, ...date});
export const setChangeContentSublist = (date) => ({type: SET_CHANGE_CONTENT_SUBLIST, ...date});







export default listsReducer;