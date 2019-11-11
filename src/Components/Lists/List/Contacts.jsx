import React,{useState} from 'react';
import s from '../Lists.module.scss';
import {ContactForm} from "../Form/ContactForm";


export const Contacts = ({name,phone,email,onSubmit,id,subId}) => {
	const [showForm,setShowForm] = useState(false);
	const setToggleFormShow = () =>{
		setShowForm(!showForm)
	};

	return (
		<div className={s.showDesc} onDoubleClick={setToggleFormShow} title='DoubleClick for edit mode'>
						  <div className={s.showDescName}>
								{name}
						  </div>
			<div className={s.showDescEmail}>
							✉ {email}
						  </div>
			<div className={s.showDescPhone}>
							✆ {phone}
						  </div>
			{showForm && <ContactForm {...{values:{name,email,phone}, setToggleFormShow,onSubmit,id,subId}}/>}
		</div>
	);
};

