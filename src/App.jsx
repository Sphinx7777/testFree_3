import React from 'react';
import s from './App.module.scss';
import {Lists} from "./Components/Lists/Lists";
import {connect} from "react-redux";
import {
	addNewField, setRemoveDescription, setShowDescription, setShowFormEdit,
	setChangeContent, setChangeItemOrder, setNewList, setRemoveSublist, setShowDescriptionSublist,
	setShowFormEditSublist, setChangeContentSublist
} from "./Components/Redux/listsReducer";


class App extends React.PureComponent {

	render() {
		let {setShowDescription, setRemoveDescription, addNewField,
			setShowFormEdit,setChangeContent,setChangeItemOrder,setNewList,
			setRemoveSublist,setShowDescriptionSublist,setShowFormEditSublist,setChangeContentSublist,
		} = this.props;
		return (
			<div className={s.app}>
				<Lists
					editMode={this.props.editMode}
					listsArr1={this.props.listsArr1}
					listsArr2={this.props.listsArr2}
					listsArr3={this.props.listsArr3}
					setShowDescription={setShowDescription}
					setRemoveDescription={setRemoveDescription}
					addNewField={addNewField}
					setShowFormEdit={setShowFormEdit}
					setChangeContent={setChangeContent}
					setChangeItemOrder={setChangeItemOrder}
					setNewList={setNewList}
					setRemoveSublist={setRemoveSublist}
					setShowDescriptionSublist={setShowDescriptionSublist}
					setShowFormEditSublist={setShowFormEditSublist}
					setChangeContentSublist={setChangeContentSublist}
				/>
			</div>
		);
	}
}

export default connect(state => ({
	editMode: state.lists.editMode,
	editField: state.lists.editField,
	listsArr1: state.lists.listsArr[0],
	listsArr2: state.lists.listsArr[1],
	listsArr3: state.lists.listsArr[2],


}), {setShowDescription, setRemoveDescription, setChangeItemOrder,
	addNewField, setShowFormEdit,setChangeContent,setNewList,setRemoveSublist,
	setShowDescriptionSublist,setShowFormEditSublist,setChangeContentSublist
})(App);

