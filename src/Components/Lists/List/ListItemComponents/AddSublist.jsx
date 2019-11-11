import React from 'react';
import {ButtonsGroupRemoveSublist} from "../ButtonsGroup/ButtonsGroupRemoveSublist";
import {Contacts} from "../Contacts";
import s from '../../Lists.module.scss'



export const AddSublist = ({listSub,dispatch,onSubmit,phone,email}) => {

	return (
		<li className={s.sublist}>
			<span title='DoubleClick for edit mode'
				onDoubleClick={() => dispatch({type: 'toggleValues',id: listSub.id})}>
			{listSub.name}
		</span>
			{listSub.valuesShow && <Contacts {...{onSubmit,name:listSub.name,id: listSub.id,phone,email}}/>}
			<ButtonsGroupRemoveSublist {...
				{
					name: listSub.name, id: listSub.id, dispatch
				}}
			/>
		</li>
	);
};
