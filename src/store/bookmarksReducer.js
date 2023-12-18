const defaultState = {
	bookmarks: [],
}

const ADD_TO_BOOKMARKS = "ADD_TO_BOOKMARKS"
const REMOVE_FROM_BOOKMARKS = "REMOVE_FROM_BOOKMARKS"

export const bookmarksReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_TO_BOOKMARKS:
			return {...state, bookmarks: [...state.bookmarks, action.payload],}
		case REMOVE_FROM_BOOKMARKS:
			return {...state, bookmarks: state.bookmarks.filter((manga) => manga.id !== action.payload)}
		default:
			return state
	}
}

export const addToBookmarks = (manga) => {return {type: ADD_TO_BOOKMARKS, payload: manga,}}

export const removeFromBookmarks = (mangaId) => {return {type: REMOVE_FROM_BOOKMARKS, payload: mangaId,}}