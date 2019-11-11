const setChangeToLocaleStorage = (arr) => {
	localStorage.setItem('listsArray', JSON.stringify(arr));
};

const createNewSublistContent = (name = Math.random().toString(36).substr(2, 5)) => {
	return {
		id: Math.random(),
		name: name,
		valuesShow: false,
		valuesEdit: false,
		sublistShow: true,
		sublist: false,
		values: {
			phone: 12345,
			email: 'new@gmail.com'
		}
	}
};

const createNewList = (name = Math.random().toString(36).substr(2, 5)) => {
	return {
		id: Math.random(),
		name: name,
		nameEdit: false,
		sublist: []
	}
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'addSublistInSublist':
			return {
				ListsWrap: state.ListsWrap.map(list => {
					list.sublist.map(sub => {
						if (sub.id === action.payload.id) {
							if (!sub.sublist) {
								sub.sublist = [];
								sub.sublist.push(createNewSublistContent(action.payload.name));
								setChangeToLocaleStorage(state.ListsWrap);
							} else {
								sub.sublist.push(createNewSublistContent(action.payload.name));
								setChangeToLocaleStorage(state.ListsWrap);
							}
							return sub;
						}
						return sub;
					});
					return list;
				})
			};
		case 'removeSublistFromSublist':
			return {
				ListsWrap: state.ListsWrap.map(list => {
					list.sublist.map(sub => {
						if (sub.id === action.payload.id) {
							sub.sublist = sub.sublist.filter(s => s.id !== action.payload.subId);
							setChangeToLocaleStorage(state.ListsWrap);
							return sub;
						}
						return sub;
					});
					return list;
				})
			};
		case 'removeSublist':
			return {
				ListsWrap: state.ListsWrap.map(list => {
						list.sublist = list.sublist.filter(sub => sub.id !== action.id);
						setChangeToLocaleStorage(state.ListsWrap);
						return list
					}
				)
			};
		case 'addSublist':
			return {
				ListsWrap: state.ListsWrap.map(list => {
						if (list.id === action.payload.id) {
							if (!list.sublist || !list.sublist.length) {
								list.sublist = [];
								list.sublist.push(createNewSublistContent(action.payload.name));
								setChangeToLocaleStorage(state.ListsWrap);
							} else {
								list.sublist.push(createNewSublistContent(action.payload.name));
								setChangeToLocaleStorage(state.ListsWrap);
							}
						}
						setChangeToLocaleStorage(state.ListsWrap);
						return list
					}
				)
			};
		case 'toggleValues':
			return {
				ListsWrap: state.ListsWrap.map(list => {
					list.sublist.map(sub => {
						if (sub.id === action.id) {
							sub.valuesShow = !sub.valuesShow;
							setChangeToLocaleStorage(state.ListsWrap);
							return sub;
						}
						return sub;
					});
					return list;
				})
			};
		case 'toggleSublistValues':
			return {
				ListsWrap: state.ListsWrap.map(list => {
					list.sublist.map(sub => {
						if (sub.id === action.payload.id) {
							sub.sublist.map(ss => {
								if (ss.id === action.payload.subId) {
									ss.valuesShow = !ss.valuesShow;
									setChangeToLocaleStorage(state.ListsWrap);
								}
							});
							return sub;
						}
						return sub;
					});
					return list;
				})
			};
		case 'addList':
			const newList = (name) => {
				state.ListsWrap.push(createNewList(name));
				setChangeToLocaleStorage(state.ListsWrap);
				return state.ListsWrap;
			};
			return {
				ListsWrap: state.ListsWrap = newList(action.name)

			};
		case 'removeList':
			const newListForRemove = () => {
				state.ListsWrap =	state.ListsWrap.filter(list => list.id !== action.id);
				setChangeToLocaleStorage(state.ListsWrap);
				return state.ListsWrap;
			};
			return {
				ListsWrap: state.ListsWrap = newListForRemove()
			};
		default:
			throw new Error();
	}

};
