import React, {useState} from 'react';


export const TextFieldNewSublist = ({list, dispatch}) => {

	let [description, setDescription] = useState(null);

	const onChange = (event) => {
		setDescription(event.target.value)
	};

	const addSublist = () => dispatch(
		{
			type: 'addSublist',
			payload: {id: list.id, name: description}
		})
	;

	return (
		<div>
			<input
				type="text"
				maxLength='20'
				onChange={onChange}
				placeholder='New Sublist'/>
			<button
				disabled={!description}
				onClick={addSublist}>
				Add
			</button>
		</div>
	);
};
