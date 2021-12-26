import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { ActionType } from "../action-types";

export const searchContent = (text: string) => {
    return async(dispatch: Dispatch<Action>, getState: any) => {
        const {searchText, contents} = getState().contents;
        const filterdData = contents.filter((content: any) => {
            return content.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        });
        dispatch({
            type: ActionType.SEARCH_CONTENTS,
            searchText: text,
            payload: filterdData
        })
    }
}

export const getContents = () => {
    return async(dispatch: Dispatch<Action>, getState: any) => {
        const {pageNo, searchText, contents} = getState().contents;
        dispatch({
            type: ActionType.GET_CONTENTS,
            payload: pageNo
        })
        try {
            const { data } = await axios.get(
                '/api/v1/content',
                {
                    params: {
                        pageNo: pageNo
                    }
                }
            );
            const contentData = [...contents, ...data['content-items'].content];
            const filterdData = contentData.filter((content: any) => {
                return content.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
            })
            console.log("filteredData", filterdData, searchText);
            dispatch({
                type: ActionType.GET_CONTENTS_SUCCESS,
                payload: contentData,
                pageTitle: data.title,
                pageNo: pageNo + 1,
                filterdContents: filterdData
            })
        } catch(err: any) {
            dispatch({
                type: ActionType.GET_CONTENTS_ERROR,
                payload: err.message
            })
        }
    }
}