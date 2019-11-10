import React from 'react';
import {ButtonsGroupAddSublist} from "../ButtonsGroup/ButtonsGroupAddSublist";


export const AddSublistForSublist = (
	{listSub, subSub, addNewSublistInSublist, removeSublistFromSublist
	}) => {

	return (
		<li>
			{subSub.name}
			<ButtonsGroupAddSublist {...
				{
					name: subSub.name,
					id: listSub.id, subId: subSub.id,
					addNewSublistInSublist, removeSublistFromSublist
				}}/>
		</li>
	);
};
