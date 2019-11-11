import React from 'react';
import s from '../../Lists.module.scss';

export const ButtonsGroupRemoveList = ({name,id,dispatch}) => {



	return (
		<>

			<button className={s.add} onClick={() => dispatch({type: 'addSublist',
				payload:{id}})}>
				Add Sublist
			</button>
			<button className={s.remove}>
				Remove <b>{name}</b>
			</button>
		</>
	);
};

