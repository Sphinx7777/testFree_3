import React from 'react';
import s from '../../Lists.module.scss';

export const ButtonsGroupAddSublist = ({name,addNewSublistInSublist, id, subId, removeSublistFromSublist}) => {


	return (
		<>
			<button className={s.up}>
				↑
			</button>
			<button className={s.down}>
				↓
			</button>
			<button className={s.add} onClick={() => addNewSublistInSublist(id)}>
				Add Sublist
			</button>
			<button className={s.remove} onClick={() => removeSublistFromSublist(id,subId)}>
				Remove <b>{name}</b>
			</button>
		</>
	);
};

