import React from 'react';
import s from '../../Lists.module.scss';

export const ButtonsGroupRemoveSublist = ({dispatch, name, id}) => {

	const addSublistInSublist = () => {
		dispatch({type: 'addSublistInSublist', payload: {id}})
	};
	const removeSublist = () => {
		dispatch({type: 'removeSublist', id})
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
			<button className={s.remove} onClick={removeSublist}>
				Remove <b>{name}</b>
			</button>
		</>
	);
};
