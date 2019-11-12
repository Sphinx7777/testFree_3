import React, {useState} from 'react';


export const TextFieldNewSublistInSublist = ({listSub, dispatch}) => {

	let [description, setDescription] = useState(null);

	const onChange = (event) => {
		setDescription(event.target.value)
	};

	const addSublistInSublist = () => dispatch(
		{
			type: 'addSublistInSublist',
			payload: {id: listSub.id, name: description}
		});


	return (
		<div>
			<input
				type="text"
				maxLength='20'
				onChange={onChange}
				placeholder='New Sublist in sublist'
			/>
			<button
				disabled={!description}
				onClick={addSublistInSublist}>
				Add
			</button>
		</div>
	);
};

