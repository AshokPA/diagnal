import { combineReducers } from "redux";
import contentReducer from "./content.reducer";

const reducers = combineReducers({
    contents: contentReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;