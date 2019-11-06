import React, {useState, useEffect} from 'react';
import {ListItem} from "./ListItem";


export const List = ({
											 listsArray, setShowDescription, setRemoveDescription, numberArr,
											 addNewField, editMode, setShowFormEdit, setChangeContent,
											 setChangeItemOrder, setNewList, setRemoveSublist,setShowDescriptionSublist,
											 setShowFormEditSublist,setChangeContentSublist
										 }) => {

	const [desc, setDesc] = useState(listsArray);
	const [Id, setId] = useState(null);
	const [isSublist, setIsSublist] = useState(null);


	useEffect(() => {
		setDesc(listsArray)
	}, [listsArray, listsArray.length]);

	const onSubmit = (formData) => {
		const newContentForSubmit = {
			name: formData.name,
			phone: formData.phone,
			email: formData.email,
			numberArr,
			id: Id
		};
		!isSublist ?
		setChangeContent(newContentForSubmit)
			:
			setChangeContentSublist(newContentForSubmit)
	};


	const createSublist = (id) => {
		const newSubList = {
			sublist: [
				{
					id: id,
					name: 'newSublist',
					phone: '',
					email: '',
					showDesc: false,
					showForm: false
				}
			]
		};
		setNewList({newSubList, id, numberArr})
	};
	const toggleFormSublist = (id,isSublist) => {
		setId(id);
		setIsSublist(isSublist);
		setShowFormEditSublist({id, numberArr})

	};

	const toggleForm = (id,isSublist) => {
		setId(id);
		setIsSublist(isSublist);
		setShowFormEdit({id, numberArr})

	};
	const changeItemOrder = (index, numberArr) => {
		[desc[index], desc[index + 1]] = [desc[index + 1], desc[index]];
		const newArray = desc.filter(d => d);
		setChangeItemOrder({newArray, numberArr})
	};

	return (
		<>
			<ListItem {...{
				setShowDescription, setRemoveDescription, numberArr,setShowDescriptionSublist,
				addNewField, editMode, desc, toggleForm, onSubmit,toggleFormSublist,
				changeItemOrder, createSublist, setRemoveSublist
			}} />
		</>
	);
};

