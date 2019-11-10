import React from 'react';
import {ListItem} from "./ListItem";


export const Lists = ({listsArr,dispatch}) => {

	return (
		<ListItem {...{listsArr,dispatch}}/>
	);
};
