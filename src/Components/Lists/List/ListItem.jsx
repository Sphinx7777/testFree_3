import React from 'react';
import s from '../Lists.module.scss';
import {ButtonsGroupAddSublist} from "./ButtonsGroupAddSublist";
import {TextField} from "../TextField";
import {ButtonsGroupRemoveSublist} from "./ButtonsGroupRemoveSublist";
import {ButtonsGroupRemoveList} from "./ButtonsGroupRemoveList";


export const ListItem = ({listsArr, addNewSublist, removeSublist}) => {

	return (
		<ul className={s.wrap}>
			{listsArr && listsArr.map(list =>
				<li key={list.id}>{list.name}<ButtonsGroupRemoveList id={list.id}/>
					<ul>
						{list.sublist && list.sublist.map(listSub =>
							!listSub.sublist || !listSub.sublist.length || !listSub.sublistShow
								?
								<li key={listSub.id}>{listSub.name}
									<ButtonsGroupAddSublist {...{id: listSub.id, addNewSublist, removeSublist}} />
								</li>
								:
								<li key={listSub.id}>{listSub.name} <ButtonsGroupRemoveSublist {...{id: listSub.id, removeSublist}}  />
									<ul>
										{listSub.sublist && listSub.sublist.map(subSub =>
											<li key={subSub.id}>
												{subSub.name}
												<ButtonsGroupAddSublist {...{
													id: listSub.id, subId: subSub.id,
													addNewSublist, removeSublist
												}} />
											</li>
										)}
										<TextField id={listSub.id}/>
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
