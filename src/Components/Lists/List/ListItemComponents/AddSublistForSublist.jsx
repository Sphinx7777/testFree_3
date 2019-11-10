import React from 'react';
import {ButtonsGroupAddSublist} from "../ButtonsGroup/ButtonsGroupAddSublist";



export const AddSublistForSublist = ({listSub, subSub, addNewSublist, removeSublist}) => {

	return (
		<li>
			{subSub.name}
			<ButtonsGroupAddSublist {...
				{
					name: subSub.name,
					id: listSub.id, subId: subSub.id,
					addNewSublist, removeSublist
				}}/>
		</li>
	);
};
