import React from 'react';
import s from '../../Lists.module.scss';

export const ButtonsGroupAddSublist = ({name, dispatch, id, subId}) => {

	const addSublistInSublist = () => {
		dispatch({type: 'addSublistInSublist', payload: {id}})
	};
	const removeSublistFromSublist = () => {
		dispatch({type: 'removeSublistFromSublist', payload: {id, subId}})
	};

	return (
		<>
			<button className={s.up}>
				↑
			</button>
			<button className={s.down}>
				↓
			</button>
			<button className={s.add} onClick={addSublistInSublist}>
				Add Sublist
			</button>
			<button className={s.remove} onClick={removeSublistFromSublist}>
				Remove <b>{name}</b>
			</button>
		</>
	);
};

