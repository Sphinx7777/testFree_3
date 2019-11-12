import React from 'react';
import s from '../../Lists.module.scss';

export const ButtonsGroupRemoveSublist = (
	{
		dispatch, name, id, index, arrLength
	}) => {

	const addSublistInSublist = () => {
		dispatch({type: 'addSublistInSublist', payload: {id}})
	};
	const removeSublist = () => {
		dispatch({type: 'removeSublist', id})
	};

	return (
		<>
			{(index > 0) &&
			<button className={s.up}>
				↑
			</button>
			}
			{
				(index < arrLength-1) &&
				<button className={s.down}>
				↓
			</button>
			}

			<button className={s.add} onClick={addSublistInSublist}>
				Add Sublist
			</button>
			<button className={s.remove} onClick={removeSublist}>
				Remove <b>{name}</b>
			</button>
		</>
	);
};
