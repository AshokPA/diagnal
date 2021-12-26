import { ActionType } from "../action-types";
import { Action } from '../actions';
interface Content {
    name: string,
    posterImage: string
}

interface ContentsRepoState {
    loading: boolean;
    error: string | null;
    contents: Content[];
    pageNo: number;
    pageTitle: string,
    filterdContents: Content[],
    searchText: string
}

const initialState = {
    loading: false,
    error: null,
    contents: [],
    pageNo: 1,
    pageTitle: '',
    filterdContents: [],
    searchText: ''
}

const contentReducer = (
    state: ContentsRepoState = initialState,
    action: Action
): ContentsRepoState => {
    switch(action.type) {
        case ActionType.GET_CONTENTS:
            return {
                ...state,
                loading: true,
                error: null,
                contents: state.contents,
                pageNo: action.payload
            };
        case ActionType.GET_CONTENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                contents: action.payload,
                pageNo: action.pageNo,
                pageTitle: action.pageTitle,
                filterdContents: action.filterdContents
            };
        case ActionType.GET_CONTENTS_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.payload,
                contents: state.contents,
                pageNo: state.pageNo
            };
        case ActionType.SEARCH_CONTENTS:
            return {
                ...state,
                searchText: action.searchText,
                filterdContents: action.payload
            }
        default:
            return state;
    }
};
export default contentReducer;
