import React, {useState} from 'react';


export const TextFieldNewList = ({dispatch}) => {

	let [description, setDescription] = useState(null);

	const onChange = (event) => {
		setDescription(event.target.value)
	};
	const addNewList = () => dispatch({type: 'addList', name: description});


	return (
		<div>
			<input
				type="text"
				maxLength='20'
				onChange={onChange}
				placeholder='New list'/>
			<button
				disabled={!description}
				onClick={addNewList}>
				Add
			</button>
		</div>
	);
};

