import React from 'react';
import s from '../Lists.module.scss';
import {TextField} from "../TextField";
import {ButtonsGroupRemoveSublist} from "./ButtonsGroup/ButtonsGroupRemoveSublist";
import {ButtonsGroupRemoveList} from "./ButtonsGroup/ButtonsGroupRemoveList";
import {AddSublist} from "./ListItemComponents/AddSublist";
import {AddSublistForSublist} from "./ListItemComponents/AddSublistForSublist";


export const ListItem = ({listsArr,dispatch}) => {

	return (
		<ul className={s.wrap}>
			{listsArr && listsArr.map(list =>
				<li key={list.id}>{list.name}
					<ButtonsGroupRemoveList {...
						{
							name: list.name, id: list.id
						}}
					/>
					<ul>
						{list.sublist && list.sublist.map(listSub =>
							!listSub.sublist || !listSub.sublist.length || !listSub.sublistShow
								?
								<AddSublist key={listSub.id} {...{listSub, dispatch}} />
								:
								<li key={listSub.id}>{listSub.name}
									<ButtonsGroupRemoveSublist {...
										{
											dispatch,
											name: listSub.name,
											id: listSub.id
										}}
									/>
									<ul>
										{listSub.sublist && listSub.sublist.map(subSub =>
											<AddSublistForSublist key={subSub.id} {...
												{
													listSub, subSub, dispatch
												}}
											/>
										)}
										<TextField/>
									</ul>
								</li>
						)}
						<TextField/>
					</ul>
				</li>
			)}
			<TextField/>
		</ul>
	);
};
