import React from 'react';
import {ButtonsGroupAddSublist} from "../ButtonsGroup/ButtonsGroupAddSublist";




export const AddSublist = (
	{listSub, addNewSublistInSublist, removeSublistFromSublist
	}) => {

	return (
		<li>{listSub.name}
			<ButtonsGroupAddSublist {...
				{
					name: listSub.name, id: listSub.id, addNewSublistInSublist, removeSublistFromSublist
				}}
			/>
		</li>
	);
};
