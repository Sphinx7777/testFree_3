import React from 'react';
import s from './Lists.module.scss';
import {List} from "./List/List";



export const Lists = (props) => {


	return (

		<div className={s.listsWrapper}>
			<List/>
		</div>

	);
};

