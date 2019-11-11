import React, {useReducer} from 'react';
import s from './App.module.scss';
import {reducer} from "./Components/Lists/List/Reducer/Reducer";
import {ListItem} from "./Components/Lists/List/ListItem";
import {Footer} from "./Components/Footer/Footer";



const ListsWrap = [
	{
		id: 1,
		name: 'List_1',
		nameEdit:false,
		sublist: [
			{
				id: 11,
				name: '1/1',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: true,
				sublist: false,
				values: {
					phone: 11,
					email: '11@gmail.com'
				}
			},
			{
				id: 12,
				name: '1/2',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: true,
				sublist: [
					{
						id: 121,
						name: '1/2/1',
						valuesShow: false,
						valuesEdit: false,
						sublistShow: true,
						sublist: false,
						values: {
							phone: 121,
							email: 'new@gmail.com'
						}
					},
					{
						id: 122,
						name: '1/2/2',
						valuesShow: false,
						valuesEdit: false,
						sublistShow: true,
						sublist: false,
						values: {
							phone: 122,
							email: 'new@gmail.com'
						}
					}

				],
				values: {
					phone: 12,
					email: '12@gmail.com'
				}
			},
			{
				id: 13,
				name: '1/3',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: true,
				sublist: false,
				values: {
					phone: 13,
					email: '13@gmail.com'
				}
			},
			{
				id: 14,
				name: '1/4',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: true,
				sublist: false,
				values: {
					phone: 14,
					email: '14@gmail.com'
				}
			}
		]
	},
];


export const App = () => {

	let listsArrFromLocalStorage = JSON.parse(localStorage.getItem('listsArray'));

	let initialState = listsArrFromLocalStorage
		? {ListsWrap: listsArrFromLocalStorage}
		: {ListsWrap};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className={s.app}>
			<ListItem {...{listsArr: state.ListsWrap, dispatch}}/>
			<Footer />
		</div>
	);
};

