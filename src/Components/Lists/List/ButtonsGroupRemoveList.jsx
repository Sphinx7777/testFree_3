import React from 'react';
import s from '../Lists.module.scss';

export const ButtonsGroupRemoveList = () => {



	return (
		<>

			<button className={s.add}>
				Remove Sublist
			</button>
			<button className={s.remove}>
				Remove
			</button>
		</>
	);
};

