import React from 'react';
import s from '../Lists.module.scss';
import {ButtonsGroup} from "./ButtonsGroup";
import {TextField} from "../TextField";

const ListsWrap = [


];






export const ListItem = () => {


	return (
		<ul className={s.listsWrap}>
			<li>List_1<ButtonsGroup />
				<ul>
					<li>List_1_1<ButtonsGroup /></li>
					<li>list_1_2<ButtonsGroup /></li>
						<ul>
							<li>List_1-2_1<ButtonsGroup /></li>
							<li>List_1-2_2<ButtonsGroup /></li>
							<TextField />
						</ul>
					<li>list_1_3<ButtonsGroup /></li>
					<li>list_1_4<ButtonsGroup /></li>
					<TextField />
				</ul>

			</li>
			<TextField />
		</ul>
	);
};
