import React from 'react';
import s from './App.module.scss';
import {Lists} from "./Components/Lists/List/Lists";

const createNewSublistContent = () => {
	return {
		id: Math.random(),
		name: Math.random().toString(36).substr(2, 5),
		valuesShow: false,
		valuesEdit: false,
		sublistShow: false,
		sublist: false,
		values:{
			phone:null,
			email:null
		}
	}
};
const ListsWrap = [
	{
		id: 1,
		name: 'List_1',
		valuesShow: false,
		valuesEdit: false,
		sublist: [
			{
				id: 11,
				name: '1/1',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: true,
				sublist: false
			},
			{
				id: 12,
				name: '1/2',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: true,
				sublist: false
			},
			{
				id: 13,
				name: '1/3',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: true,
				sublist: false
			},
			{
				id: 14,
				name: '1/4',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: true,
				sublist: false
			}
		]
	},
];

// const initialState = {count: 0};
//
// function reducer(state, action) {
// 	switch (action.type) {
// 		case 'increment':
// 			return {count: state.count + 1};
// 		case 'decrement':
// 			return {count: state.count - 1};
// 		default:
// 			throw new Error();
// 	}
// }


export const App = () => {
	// const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className={s.app}>
			<Lists {...{createNewSublistContent,ListsWrap}}/>
		</div>
	);
};

