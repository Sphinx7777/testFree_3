import React from 'react';
import {ButtonsGroupAddSublist} from "../ButtonsGroup/ButtonsGroupAddSublist";
import {Contacts} from "../Contacts";


export const AddSublistForSublist = ({listSub, dispatch, subSub}) => {

	return (
		<li>
			<span
				onDoubleClick={() => dispatch({type: 'toggleSublistValues',payload:{id: listSub.id,subId: subSub.id}})}>
				{subSub.name}
			</span>
			{subSub.valuesShow && <Contacts name={subSub.name}/>}
			<ButtonsGroupAddSublist {...
				{
					dispatch,
					name: subSub.name,
					id: listSub.id, subId: subSub.id
				}}/>
		</li>
	);
};
