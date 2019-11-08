import React from 'react';
import s from '../Lists.module.scss';

export const ButtonsGroupAddSublist = ({addNewSublist, id, subId, removeSublist}) => {


	return (
		<>
			<button className={s.up}>
				↑
			</button>
			<button className={s.down}>
				↓
			</button>
			<button className={s.add} onClick={() => addNewSublist(id)}>
				Add Sublist
			</button>
			<button className={s.remove} onClick={() => removeSublist(id,subId)}>
				Remove
			</button>
		</>
	);
};

