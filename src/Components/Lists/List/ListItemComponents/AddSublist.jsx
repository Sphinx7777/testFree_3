import React from 'react';
import {ButtonsGroupAddSublist} from "../ButtonsGroup/ButtonsGroupAddSublist";




export const AddSublist = (
	{listSub, dispatch
	}) => {

	return (
		<li>{listSub.name}
			<ButtonsGroupAddSublist {...
				{
					name: listSub.name, id: listSub.id, dispatch
				}}
			/>
		</li>
	);
};
