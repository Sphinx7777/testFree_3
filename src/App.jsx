import React from 'react';
import s from './App.module.scss';
import {Lists} from "./Components/Lists/List/Lists";



export const App = () => {

	return (
		<div className={s.app}>
			<Lists />
		</div>
	);
};

