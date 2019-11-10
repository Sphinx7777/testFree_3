import React, {useState, useEffect} from 'react';
import s from '../Lists.module.scss';
import {ListItem} from "./ListItem";


export const Lists = ({createNewSublistContent,ListsWrap}) => {

	let listsArrFromLocalStorage = JSON.parse(localStorage.getItem('listsArray'));
	const [listsArr, setListsArr] = useState(listsArrFromLocalStorage || ListsWrap);

	const setChangeToLocaleStorage = (newArr) => {
		localStorage.setItem('listsArray', JSON.stringify(newArr));
		let listsArrFromLocalStorage = JSON.parse(localStorage.getItem('listsArray'));
		setListsArr(listsArrFromLocalStorage);
	};

	const addNewSublist = (id) => {
		const newSublist = createNewSublistContent();
		let newArr = listsArr.map(list => {
			list.sublist.map(sub => {
				if (sub.id === id) {
					if (!sub.sublist) {
						sub.sublist = [];
						sub.sublist.push(newSublist);
					} else {
						sub.sublist.push(newSublist);
					}
					return sub;
				}
				return sub;
			});
			return list;
		});

		setChangeToLocaleStorage(newArr);
	};

	const removeSublist = (id, subId) => {
		let newArr = listsArr.map(list => {
			list.sublist.map(sub => {
				if (sub.id === id) {
					sub.sublist = sub.sublist.filter(s => s.id !== subId);
					return sub;
				}
				return sub;
			});
			return list;
		});
		setChangeToLocaleStorage(newArr);
	};


	return (
		<ListItem {...{listsArr, addNewSublist, removeSublist}}/>
	);
};
