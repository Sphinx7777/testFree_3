import React from 'react';
import s from '../Lists.module.scss';


export const Contacts = ({name}) => {

	return (
		<div className={s.showDesc}>
						  <div className={s.showDescName}>
								{name}
						  </div>
			<div className={s.showDescEmail}>
							✉ 123@gmail.com
						  </div>
			<div className={s.showDescPhone}>
							✆ 066 395 24 88
						  </div>
			<div className={s.closeDesc}>
								X
							</div>
		</div>
	);
};

