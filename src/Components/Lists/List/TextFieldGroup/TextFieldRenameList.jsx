import React, {useState} from 'react';
import s from '../../Lists.module.scss';


export const TextFieldRenameList = ({dispatch, id, toggleEditNameList}) => {

	let [description, setDescription] = useState(null);

	const onChange = (event) => {
		setDescription(event.target.value)
	};

	const listRename = () => {
		dispatch({type: 'listRename', payload: {name: description, id}});
		setTimeout(toggleEditNameList(id), 0);
	};

	return (
		<div className={s.newTitleList}>
			<input
				type="text"
				maxLength='20'
				onChange={onChange}
				placeholder='New title list'/>
			<button
				disabled={!description}
				onClick={listRename}>
				Add
			</button>
		</div>
	);
};

