import React from 'react';
import s from '../../Lists.module.scss';

export const ButtonsGroupRemoveSublist = ({addNewSublist,name,removeSublist,id}) => {



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
			<button className={s.remove}>
				Remove <b>{name}</b>
			</button>
		</>
	);
};

