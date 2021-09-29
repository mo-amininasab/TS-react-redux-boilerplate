enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCUSS = 'search_repositories_succuss',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

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

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccussAction
  | SearchRepositoriesErrorAction;

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
