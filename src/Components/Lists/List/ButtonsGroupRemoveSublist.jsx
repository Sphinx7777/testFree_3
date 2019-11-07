import React from 'react';
import s from '../Lists.module.scss';

export const ButtonsGroupRemoveSublist = () => {



	return (
		<>
			<button className={s.up}>
				↑
			</button>
			<button className={s.down}>
				↓
			</button>
			<button className={s.add}>
				Remove Sublist
			</button>
			<button className={s.remove}>
				Remove
			</button>
		</>
	);
};

