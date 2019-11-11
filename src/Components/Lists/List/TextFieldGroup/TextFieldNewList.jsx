import React, {useState} from 'react';


export const TextFieldNewList = ({dispatch}) => {

	let [description, setDescription] = useState(null);

	const onChange = (event) => {
		setDescription(event.target.value)
	};


	return (
		<div>
			<input type="text" maxLength='20' onChange={onChange} placeholder='New list'/>
			<button disabled={!description}
							onClick={() => dispatch({type: 'addList',
								name:description})}>
				Add
			</button>
		</div>
	);
};

