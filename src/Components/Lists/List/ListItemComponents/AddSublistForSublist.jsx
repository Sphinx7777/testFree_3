import React from 'react';
import {ButtonsGroupAddSublist} from "../ButtonsGroup/ButtonsGroupAddSublist";
import {Contacts} from "../Contacts";


export const AddSublistForSublist = ({listSub, dispatch, subSub,onSubmit}) => {

	return (
		<li>
			<span title='DoubleClick for edit mode'
				onDoubleClick={() => dispatch({type: 'toggleSublistValues',payload:{id: listSub.id,subId: subSub.id}})}>
				{subSub.name}
			</span>
			{
				subSub.valuesShow &&
				<Contacts {...
				{onSubmit,name:subSub.name,id: listSub.id,
					subId:subSub.id,phone:subSub.values.phone,email:subSub.values.email
				}}
			/>
			}
			<ButtonsGroupAddSublist {...
				{
					dispatch,
					name: subSub.name,
					id: listSub.id, subId: subSub.id
				}}/>
		</li>
	);
};
