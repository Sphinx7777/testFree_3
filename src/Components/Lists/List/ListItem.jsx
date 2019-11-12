import React, {useState} from 'react';
import s from '../Lists.module.scss';
import {ButtonsGroupRemoveSublist} from "./ButtonsGroup/ButtonsGroupRemoveSublist";
import {ButtonsGroupRemoveList} from "./ButtonsGroup/ButtonsGroupRemoveList";
import {AddSublist} from "./ListItemComponents/AddSublist";
import {AddSublistForSublist} from "./ListItemComponents/AddSublistForSublist";
import {TextFieldNewSublistInSublist} from "./TextFieldGroup/TextFieldNewSublistInSublist";
import {TextFieldNewSublist} from "./TextFieldGroup/TextFieldNewSublist";
import {TextFieldNewList} from "./TextFieldGroup/TextFieldNewList";
import {Contacts} from "./Contacts";
import {TextFieldRenameList} from "./TextFieldGroup/TextFieldRenameList";


export const ListItem = ({listsArr, dispatch}) => {

	const onSubmit = (formData) => {
		if (!formData.subId) {
			dispatch({type: 'changeSublistValues', ...formData})
		} else {
			dispatch({type: 'changeSublistInSublistValues', ...formData})
		}
	};

	const toggleSublistShow = id => dispatch({type: 'toggleValues', id});

	const toggleEditNameList = id => dispatch({type: 'toggleEditNameList', id});

	return (
		<ul className={s.wrap}>
			{
				listsArr && listsArr.map(list =>
					<li key={list.id} className={s.list}>
						<span className={s.listName}
									title='DoubleClick for rename'
									onDoubleClick={()=>toggleEditNameList(list.id)}>
							{list.nameEdit &&
							<TextFieldRenameList {...
								{
									toggleEditNameList,
									name:list.name,
									dispatch,
									id: list.id
								}}/>}
								{list.name}
						</span>
						<ButtonsGroupRemoveList {...
							{
								name: list.name,
								id: list.id,
								dispatch
							}}
						/>
						<ul>
							{
								list.sublist && list.sublist.map(listSub =>

									!listSub.sublist || !listSub.sublist.length || !listSub.sublistShow
										?
										<AddSublist
											key={listSub.id} {...
											{
												phone: listSub.values.phone,
												email: listSub.values.email,
												listSub,
												onSubmit,
												list,
												dispatch
											}}
										/>
										:
										<li key={listSub.id} className={s.sublist}>
									<span
										title='DoubleClick for edit mode'
										onDoubleClick={() => toggleSublistShow(listSub.id)}>
										{listSub.name}
									</span>
											{
												listSub.valuesShow &&
												<Contacts {...
													{
														onSubmit,
														name: listSub.name,
														phone: listSub.values.phone,
														email: listSub.values.email,
														id: listSub.id
													}}
												/>
											}
											<ButtonsGroupRemoveSublist {...
												{
													dispatch,
													name: listSub.name,
													id: listSub.id
												}}
											/>
											<ul>
												{
													listSub.sublist && listSub.sublist.map(subSub =>
														<AddSublistForSublist key={subSub.id} {...
															{
																listSub, subSub, dispatch, onSubmit
															}}
														/>)}
												<TextFieldNewSublistInSublist {...
													{
														listSub,
														dispatch
													}}
												/>
											</ul>
										</li>
								)}
							<TextFieldNewSublist {...
								{
									list,
									dispatch
								}}
							/>
						</ul>
					</li>
				)
			}
			<TextFieldNewList {...
				{
					dispatch
				}}
			/>
		</ul>
	);
};
