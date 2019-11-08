import React, {useState, useEffect} from 'react';
import s from '../Lists.module.scss';
import {ListItem} from "./ListItem";


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
				sublistShow: false,
				sublist: false
			},
			{
				id: 12,
				name: '1/2',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: true,
				sublist:
					[
						{
							id: 121,
							name: '1/2/1',
							valuesShow: false,
							valuesEdit: false,
							values: {
								phone: 1234567891,
								email: '123@gmail.com',
								dateOfBirth: '20.02.2075'
							}
						},
						{
							id: 122,
							name: '1/2/2',
							valuesShow: false,
							valuesEdit: false,
							values: {
								phone: 1234567891,
								email: '123@gmail.com',
								dateOfBirth: '20.02.2075'
							}
						},
					]
			},
			{
				id: 13,
				name: '1/3',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: false,
				sublist: false
			},
			{
				id: 14,
				name: '1/4',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: false,
				sublist: false
			}
		]
	},
];
localStorage.setItem('listsArray', JSON.stringify(ListsWrap));

export const Lists = () => {

	const listsArrFromLocalStorage = JSON.parse(localStorage.getItem('listsArray'));

	const [listsArr, setListsArr] = useState(listsArrFromLocalStorage);

	const newSublist = {
		id: +new Date().toString(),
		name: 'newSublist',
		valuesShow: false,
		valuesEdit: false,
		sublistShow: false,
		sublist: false
	};



	return (
		<ListItem {...{listsArr}}/>
	);
};
