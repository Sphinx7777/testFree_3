const setChangeToLocaleStorage = (arr) => {
	localStorage.setItem('listsArray', JSON.stringify(arr));
};

const createNewSublistContent = () => {
	return {
		id: Math.random(),
		name: Math.random().toString(36).substr(2, 5),
		valuesShow: false,
		valuesEdit: false,
		sublistShow: false,
		sublist: false,
		values:{
			phone:12345,
			email:'new@gmail.com'
		}
	}
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'addSublistInSublist':
			return {
				ListsWrap: state.ListsWrap.map(list => {
					list.sublist.map(sub => {
						if (sub.id === action.id) {
							if (!sub.sublist) {
								sub.sublist = [];
								sub.sublist.push(createNewSublistContent());
								setChangeToLocaleStorage(state.ListsWrap);
							} else {
								sub.sublist.push(createNewSublistContent());
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
		default:
			throw new Error();
	}

};
