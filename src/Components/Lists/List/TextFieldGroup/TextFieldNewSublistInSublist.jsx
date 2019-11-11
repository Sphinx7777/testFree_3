import React, {useState} from 'react';


export const TextFieldNewSublistInSublist = ({listSub}) => {

	let [description, setDescription] = useState(null);

	const onChange = (event) => {
		setDescription(event.target.value)
	};


	return (
		<div>
			<input type="text" maxLength='20' onChange={onChange} placeholder='New Sublist in sublist'/>
			<button disabled={!description}>Add</button>
		</div>
	);
};

