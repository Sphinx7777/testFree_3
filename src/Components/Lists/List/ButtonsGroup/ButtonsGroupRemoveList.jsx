import React from 'react';
import s from '../../Lists.module.scss';

export const ButtonsGroupRemoveList = ({name, id, dispatch}) => {

	const addList = () => {
		dispatch({type: 'addSublist', payload: {id}})
	};
	const removeList = () => {
		dispatch({type: 'removeList', id})
	};

	return (
		<>
			<button className={s.add} onClick={addList}>
				Add Sublist
			</button>
			<button className={s.remove} onClick={removeList}>
				Remove <b>{name}</b>
			</button>
		</>
	);
};

