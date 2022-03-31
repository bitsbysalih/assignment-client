import { ActionType } from "../action-types";
import { Action } from "../actions";

interface messagesState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: messagesState = initialState,
  action: Action
): messagesState => {
  switch (action.type) {
    case ActionType.GET_MESSAGES:
      return { loading: true, error: null, data: [] };
    case ActionType.GET_MESSAGES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_MESSAGES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case ActionType.GET_MESSAGE:
      return { loading: true, error: null, data: {} };
    case ActionType.GET_MESSAGE_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_MESSAGE_ERROR:
      return { loading: false, error: action.payload, data: {} };
    default:
      return state;
  }
};

export default reducer;
