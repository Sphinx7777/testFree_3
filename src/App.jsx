import React from 'react';
import s from './App.module.scss';
import {Lists} from "./Components/Lists/Lists";
import {connect} from "react-redux";



class App extends React.Component {

	render() {

		return (
			<div className={s.app}>
				<Lists/>
			</div>
		);
	}
}

export default connect(state => ({
	editMode: state.lists.editMode,
}), {})(App);

