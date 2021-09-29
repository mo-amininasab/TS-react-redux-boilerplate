import { ActionType } from '../constants/actionTypes';

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccussAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCUSS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccussAction
  | SearchRepositoriesErrorAction;

// export const actionName = (payload) => ({
//   type: type,
//   payload
// })
