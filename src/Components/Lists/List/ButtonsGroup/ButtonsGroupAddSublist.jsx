import React from 'react';
import s from '../../Lists.module.scss';

export const ButtonsGroupAddSublist = (
	{
		name, dispatch, id, subId, index, arrLength
	}) => {

	const addSublistInSublist = () => {
		dispatch({type: 'addSublistInSublist', payload: {id}})
	};
	const removeSublistFromSublist = () => {
		dispatch({type: 'removeSublistFromSublist', payload: {id, subId}})
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
			<button className={s.remove} onClick={removeSublistFromSublist}>
				Remove <b>{name}</b>
			</button>
		</>
	);
};

