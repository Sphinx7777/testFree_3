import React from 'react';
import s from './ContactForm.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "./FormComponent/InputComponent";
import {Email, emptyField, maxLengthCreator, phoneNumber} from "./FormComponent/Validators";

const maxLength30 = maxLengthCreator(30);
const maxLength15 = maxLengthCreator(15);

const ContactForm = (props) => {

	const {handleSubmit, pristine, submitting, toggleForm,toggleFormSublist,isSublist, id} = props;

	const setToggleForm =(id)=>{
		!isSublist ?
			toggleForm(id)
			:
			toggleFormSublist(id)
	};

	return (
		<div className={s.settingsFormWrapper}>
			<form onSubmit={handleSubmit}>
				<div className={s.settingsForm}>
					<Field
						name='name'
						type='text'
						placeholder='Name'
						maxLength='31'
						component={InputComponent}
						label='Name'
						validate={[emptyField, maxLength30]}
					/>
					<Field
						name='email'
						type='email'
						placeholder='Email'
						maxLength='31'
						component={InputComponent}
						label='Email'
						validate={[Email, maxLength30]}
					/>
					<Field
						name='phone'
						type='tel'
						placeholder='Phone'
						maxLength='16'
						component={InputComponent}
						label='Phone'
						validate={[phoneNumber, maxLength15]}
					/>
					<div className={s.sendBtns}>
						<button className={s.sendBtn} type="submit" disabled={pristine || submitting}>
							To send
						</button>
						<button className={s.sendBtn} type="reset" disabled={pristine}>
							Reset
						</button>
					</div>
				</div>
			</form>
			<span className={s.closeForm} onClick={() => setToggleForm(id)}>X</span>
		</div>
	)
};

export default reduxForm({form: 'settingsForm', enableReinitialize: true})(ContactForm)