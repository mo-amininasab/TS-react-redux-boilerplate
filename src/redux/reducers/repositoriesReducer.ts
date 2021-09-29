import { ActionType } from '../constants/actionTypes';
import { Action } from '../actions/actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

export default (state = initialState, action: Action): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { ...state, loading: true, error: null, data: [] };

    case ActionType.SEARCH_REPOSITORIES_SUCCUSS:
      return { ...state, loading: false, error: null, data: action.payload };

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
