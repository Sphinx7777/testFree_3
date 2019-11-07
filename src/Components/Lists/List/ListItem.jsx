import React from 'react';
import s from '../Lists.module.scss';
import {ButtonsGroup} from "./ButtonsGroup";
import {TextField} from "../TextField";

const ListsWrap = [
	{
		"id": 1,
		"name": "List_1",
		"sublist_1": [
			{
				"id": 2,
				"name": "List_1_1",
				"sublist_2": [
					{
						"id": 3,
						"name": "List_1_2",
						"sublist_2_1": [
							{
								"id": 7,
								"name": "List_1_2_1",
								values: {}
							}
						]
					},
					{
						"id": 4,
						"name": "list_1_2",
						"sublist_2": [
							{
								"id": 8,
								"name": "List_1_2_1",
								values: {}
							}
						]
					}
				]
			},
			{
				"id": 6,
				"name": "list_1_2",
				"sublist_2": [
					{
						"id": 6,
						"name": "List_1_2_1",
						values: {}
					}
				]
			}
		]
	}
];


export const ListItem = () => {


	return (
		<ul className={s.listsWrap}>
			<li>List_1<ButtonsGroup/>
				<ul>
					<li>List_1_1<ButtonsGroup/></li>
					<li>list_1_2<ButtonsGroup/></li>
					<ul>
						<li>List_1-2_1<ButtonsGroup/></li>
						<li>List_1-2_2<ButtonsGroup/></li>
						<TextField/>
					</ul>
					<li>list_1_3<ButtonsGroup/></li>
					<li>list_1_4<ButtonsGroup/></li>
					<TextField/>
				</ul>

			</li>
			<TextField/>
		</ul>
	);
};
