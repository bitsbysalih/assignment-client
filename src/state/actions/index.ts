import { ActionType } from "../action-types";

interface GetMessagesAction {
  type: ActionType.GET_MESSAGES;
}

interface GetMessagesActionSuccessAction {
  type: ActionType.GET_MESSAGES_SUCCESS;
  payload: any;
}

interface GetMessagesErrorAction {
  type: ActionType.GET_MESSAGES_ERROR;
  payload: string;
}

interface GetMessageAction {
  type: ActionType.GET_MESSAGE;
}

interface GetMessageActionSuccessAction {
  type: ActionType.GET_MESSAGE_SUCCESS;
  payload: any;
}

interface GetMessageErrorAction {
  type: ActionType.GET_MESSAGE_ERROR;
  payload: string;
}

export type Action =
  | GetMessagesAction
  | GetMessagesActionSuccessAction
  | GetMessagesErrorAction
  | GetMessageAction
  | GetMessageActionSuccessAction
  | GetMessageErrorAction;
