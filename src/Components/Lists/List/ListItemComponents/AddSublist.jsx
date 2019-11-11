import React from 'react';
import {ButtonsGroupRemoveSublist} from "../ButtonsGroup/ButtonsGroupRemoveSublist";
import {Contacts} from "../Contacts";
import s from '../../Lists.module.scss'



export const AddSublist = ({listSub,dispatch}) => {

	return (
		<li className={s.sublist}>
			<span
				onDoubleClick={() => dispatch({type: 'toggleValues',id: listSub.id})}>
			{listSub.name}
		</span>
			{listSub.valuesShow && <Contacts name={listSub.name}/>}
			<ButtonsGroupRemoveSublist {...
				{
					name: listSub.name, id: listSub.id, dispatch
				}}
			/>
		</li>
	);
};
