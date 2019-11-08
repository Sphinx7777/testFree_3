import React,{useState} from 'react';
import s from './Lists.module.scss';

export const TextField = () => {

	let [description,setDescription] = useState(null);

	const onChange = (event) => {
		setDescription(event.target.value)
	};

	const setNewField = ()=>{

		const newField = {
			id:Math.random(),
			name:description,
			phone:'',
			email:'',
			showDesc:false,
			showForm: false
		};


	};

	return (
		<div>
			<input type="text" maxLength='20' onChange={onChange} placeholder='Name'/>
			<button onClick={setNewField} disabled={!description}>Add</button>
		</div>
	);
};

