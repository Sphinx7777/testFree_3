import React from 'react';
import s from '../../Lists.module.scss';

export const ButtonsGroupAddSublist = ({name, dispatch, id, subId}) => {


	return (
		<>
			<button className={s.up}>
				↑
			</button>
			<button className={s.down}>
				↓
			</button>
			<button className={s.add} onClick={() => dispatch({type: 'addSublistInSublist', id})}>
				Add Sublist
			</button>
			<button className={s.remove} onClick={() => dispatch({type: 'removeSublistFromSublist', payload: {id, subId}})}>
				Remove <b>{name}</b>
			</button>
		</>
	);
};

