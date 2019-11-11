import React from 'react';
import s from '../../Lists.module.scss';

export const ButtonsGroupRemoveSublist = ({dispatch,name,id}) => {



	return (
		<>
			<button className={s.up}>
				↑
			</button>
			<button className={s.down}>
				↓
			</button>
			<button className={s.add} onClick={() => dispatch({type: 'addSublistInSublist',payload:{id} })}>
				Add Sublist
			</button>
			<button className={s.remove} onClick={() => dispatch({type: 'removeSublist',id})}>
				Remove <b>{name}</b>
			</button>
		</>
	);
};
