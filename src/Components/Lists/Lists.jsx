import React from 'react';
import s from './Lists.module.scss';
import {ListItem} from "./List/ListItem";



export const Lists = (props) => {


	return (

		<div className={s.listsWrapper}>
			<ListItem/>
		</div>

	);
};

