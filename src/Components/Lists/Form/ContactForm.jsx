import React, {useState} from 'react';
import s from './ContactForm.module.scss';

export const ContactForm = ({setToggleFormShow, onSubmit, values, id, subId}) => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const formData = {
		name, email, phone, id, subId
	};

	const submit = (e) => {
		e.preventDefault();
		onSubmit(formData);
	};

	const onChangeName = (e) => {
		setName(e.currentTarget.value)
	};

	const onChangeEmail = (e) => {
		setEmail(e.currentTarget.value)
	};

	const onChangePhone = (e) => {
		setPhone(e.currentTarget.value)
	};

	return (
		<div className={s.settingsFormWrapper}
				 onDoubleClick={(event) => event.stopPropagation()}>
			<form onSubmit={submit}>
				<div className={s.settingsForm}>
					<input
						name='name'
						type='text'
						defaultValue={values.name}
						onChange={onChangeName}
						placeholder='Name'
						maxLength='20'
					/>
					<input
						name='email'
						type='email'
						defaultValue={values.email}
						onChange={onChangeEmail}
						placeholder='Email'
						maxLength='30'
					/>
					<input
						name='phone'
						type='tel'
						defaultValue={values.phone}
						onChange={onChangePhone}
						placeholder='Phone'
						maxLength='20'
					/>
					<div className={s.sendBtnGroup}>
						<button className={s.sendBtn}
										onClick={() => setTimeout(setToggleFormShow, 0)} type="submit">
							To send
						</button>
						<button className={s.sendBtn} type="reset">
							Reset
						</button>
					</div>
				</div>
			</form>
			<span className={s.closeForm} onClick={setToggleFormShow}>X</span>
		</div>
	)
};
