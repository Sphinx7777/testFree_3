import React from 'react';
import s from '../Lists.module.scss';


export const Contacts = () => {

	return (
		<div className={s.showDesc}>
						  <span className={s.showDescEmail}>
							✉ 123@gmail.com
						  </span>
			<span className={s.showDescPhone}>
							✆ 066 395 24 88
						  </span>
			<span className={s.closeDesc}>
								X
							</span>
		</div>
	);
};

