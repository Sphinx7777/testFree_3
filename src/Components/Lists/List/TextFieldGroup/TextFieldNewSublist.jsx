import React, {useState} from 'react';


export const TextFieldNewSublist = ({list,dispatch}) => {

	let [description, setDescription] = useState(null);

	const onChange = (event) => {
		setDescription(event.target.value)
	};


	return (
		<div>
			<input type="text" maxLength='20' onChange={onChange} placeholder='New Sublist'/>
			<button disabled={!description}
							onClick={() => dispatch({type: 'addSublist',
								payload:{id:list.id,name:description}})}>Add</button>
		</div>
	);
};
