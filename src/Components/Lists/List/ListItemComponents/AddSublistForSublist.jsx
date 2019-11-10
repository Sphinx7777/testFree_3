import React from 'react';
import {ButtonsGroupAddSublist} from "../ButtonsGroup/ButtonsGroupAddSublist";


export const AddSublistForSublist = (
	{listSub,dispatch, subSub
	}) => {

	return (
		<li>
			{subSub.name}
			<ButtonsGroupAddSublist {...
				{dispatch,
					name: subSub.name,
					id: listSub.id, subId: subSub.id
				}}/>
		</li>
	);
};
