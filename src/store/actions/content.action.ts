import { ActionType } from "../action-types";

interface GetContentsAction {
    type: ActionType.GET_CONTENTS;
    payload: number
}

interface GetContentsActionSuccess {
    type: ActionType.GET_CONTENTS_SUCCESS,
    payload: any[];
    pageTitle: string;
    pageNo: number;
    filterdContents: any [];
}

interface GetContentsActionError {
    type: ActionType.GET_CONTENTS_ERROR;
    payload: any;
}

interface SearchContentAction {
    type: ActionType.SEARCH_CONTENTS;
    searchText: string;
    payload: any []
}

export type Action = 
    | GetContentsAction
    | GetContentsActionSuccess
    | GetContentsActionError
    | SearchContentAction;