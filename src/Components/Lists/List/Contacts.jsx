import React from 'react';
import s from '../Lists.module.scss';


export const Contacts = React.memo (({showDescription, numberArr, editMode, toggleForm,list,isSublist,toggleFormSublist}) => {

	const setToggleForm = ()=>{
		!isSublist ?
			toggleForm(list.id,isSublist)
			:
			toggleFormSublist(list.id,isSublist)
	};

	return (
		<div className={s.showDesc}
				 onDoubleClick={() => !editMode && setToggleForm(list.id)
				 }>
						  <span className={s.showDescEmail}>
							✉ {list.email}
						  </span>
			<span className={s.showDescPhone}>
							✆ {list.phone}
						  </span>
			<span className={s.closeDesc}
						onClick={() => !editMode && showDescription({
							status: !list.showDesc,
							id: list.id,
							numberArr
						})}>
								X
							</span>
		</div>
	);
});

