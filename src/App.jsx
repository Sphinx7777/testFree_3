import React, {useReducer} from 'react';
import s from './App.module.scss';
import {reducer} from "./Components/Lists/List/Reducer/Reducer";
import {ListItem} from "./Components/Lists/List/ListItem";
import {Footer} from "./Components/Footer/Footer";
import {ListsWrap} from "./Components/Lists/List/Reducer/InitialArray";



export const App = () => {

	let listsArrFromLocalStorage = JSON.parse(localStorage.getItem('listsArray'));

	let initialState = listsArrFromLocalStorage
		? {ListsWrap: listsArrFromLocalStorage}
		: {ListsWrap};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className={s.app}>
			<ListItem {...
				{listsArr: state.ListsWrap,
					dispatch
				}}/>
			<Footer />
		</div>
	);
};

