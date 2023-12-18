import {combineReducers, createStore} from "redux";
import {bookmarksReducer} from "./bookmarksReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers(
	{
		bookmarks: bookmarksReducer,
	}
)

export const store = createStore(rootReducer, composeWithDevTools())