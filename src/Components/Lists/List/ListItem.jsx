import React from 'react';
import s from '../Lists.module.scss';
import {ButtonsGroupAddSublist} from "./ButtonsGroupAddSublist";
import {TextField} from "../TextField";
import {ButtonsGroupRemoveSublist} from "./ButtonsGroupRemoveSublist";
import {ButtonsGroupRemoveList} from "./ButtonsGroupRemoveList";




export const ListItem = ({listsArr}) => {

	return (
		<ul>
			{listsArr && listsArr.map(list =>
				<li key={list.id}>{list.name}<ButtonsGroupRemoveList />
					<ul>
						{list.sublist && list.sublist.map(listSub =>
							!listSub.sublist || !listSub.sublistShow
								?
								<li key={listSub.id}>{listSub.name} <ButtonsGroupAddSublist /></li>
								:
								<li key={listSub.id}>{listSub.name} <ButtonsGroupRemoveSublist/>
									<ul>
										{listSub.sublist && listSub.sublist.map(subSub =>
											<li key={subSub.id}>{subSub.name}<ButtonsGroupAddSublist/></li>
										)}
										<TextField />
									</ul>
								</li>
						)}
						<TextField />
					</ul>
				</li>
			)}
			<TextField />
		</ul>
	);
};
