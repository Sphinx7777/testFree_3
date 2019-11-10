import React from 'react';
import s from '../../Lists.module.scss';

export const ButtonsGroupRemoveList = ({name}) => {



	return (
		<>

			<button className={s.add}>
				Add Sublist
			</button>
			<button className={s.remove}>
				Remove <b>{name}</b>
			</button>
		</>
	);
};

