import { actions } from "../actions";

interface IState {
  showConsole: boolean;
  showTokens: boolean;
}

const initialState: IState = {
  showConsole: true,
  showTokens: false,
};

export function ui(
  state: IState = initialState,
  action: { type: any; payload: any }
): IState {
  const { payload = null } = action;
  switch (action.type) {
    case actions.SHOW_CONSOLE:
      return {
        ...state,
        showConsole: true,
      };
    case actions.HIDE_CONSOLE:
      return {
        ...state,
        showConsole: false,
      };

    case actions.SHOW_TOKENS:
      return {
        ...state,
        showTokens: true,
      };
    case actions.HIDE_TOKENS:
      return {
        ...state,
        showTokens: false,
      };
    default:
      return state;
  }
}
