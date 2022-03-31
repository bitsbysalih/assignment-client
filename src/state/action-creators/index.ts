import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const getMessages = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_MESSAGES,
    });

    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/message`
      );

      dispatch({
        type: ActionType.GET_MESSAGES_SUCCESS,
        payload: data,
      });
    } catch (err) {
      //   dispatch({
      //     type: ActionType.GET_MESSAGES_ERROR,
      //     ,
      //   });
    }
  };
};

export const getMessage = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_MESSAGE,
    });

    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/message/${id}`
      );

      dispatch({
        type: ActionType.GET_MESSAGE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      //   dispatch({
      //     type: ActionType.GET_MESSAGES_ERROR,
      //     ,
      //   });
    }
  };
};
