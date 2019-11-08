import React, {useState, useEffect} from 'react';
import s from '../Lists.module.scss';
import {ButtonsGroup} from "./ButtonsGroup";
import {TextField} from "../TextField";
import {ButtonsGroupRemove} from "./ButtonsGroupRemove";
import {ButtonsGroupRemoveSublist} from "./ButtonsGroupRemoveSublist";


const ListsWrap = [
	{
		id: 29,
		name: 'List_1',
		valuesShow: false,
		valuesEdit: false,
		sublist: [
			{
				id: 28,
				name: '1/1',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: false,
				sublist: false
			},
			{
				id: 27,
				name: '1/2',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: true,
				sublist:
					[
						{
							id: 31,
							name: '1/2/1',
							valuesShow: false,
							valuesEdit: false,
							values: {
								phone: 1234567891,
								email: '123@gmail.com',
								dateOfBirth: '20.02.2075'
							}
						},
						{
							id: 33,
							name: '1/2/2',
							valuesShow: false,
							valuesEdit: false,
							values: {
								phone: 1234567891,
								email: '123@gmail.com',
								dateOfBirth: '20.02.2075'
							}
						},
					]
			},
			{
				id: 22,
				name: '1/3',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: false,
				sublist: false
			},
			{
				id: 21,
				name: '1/4',
				valuesShow: false,
				valuesEdit: false,
				sublistShow: false,
				sublist: false
			}
		]
	},
];


export const ListItem = () => {

	const [listsArr, setListsArr] = useState(ListsWrap);


	return (
		<ul>
			{listsArr.map(list =>
				<li>{list.name}
					<ul>
						{list.sublist && list.sublist.map(listSub =>
							!listSub.sublist || !listSub.sublistShow
								?
								<li>{listSub.name} <ButtonsGroup/></li>
								:
								<li>{listSub.name} <ButtonsGroupRemove/>
									<ul>
										{listSub.sublist && listSub.sublist.map(subSub =>
											<li>{subSub.name}<ButtonsGroup/></li>
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
