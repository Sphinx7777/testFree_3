import React from 'react';
import s from './App.module.scss';
import {ListItem} from "./Components/Lists/List/ListItem";



export const App = () => {

	return (
		<div className={s.app}>
			<ListItem />
		</div>
	);
};

