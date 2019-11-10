import React from 'react';
import {ButtonsGroupAddSublist} from "../ButtonsGroup/ButtonsGroupAddSublist";




export const AddSublist = ({listSub, addNewSublist, removeSublist}) => {

	return (
		<li>{listSub.name}
			<ButtonsGroupAddSublist {...
				{
					name: listSub.name, id: listSub.id, addNewSublist, removeSublist
				}}
			/>
		</li>
	);
};
