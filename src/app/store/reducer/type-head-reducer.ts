interface Action {
  type: string;
  payload?: any
};

export interface TypeHeadState {
  state: 'loading' | 'default' | 'error',
  data: any,
  error: any
};

const INITIAL_STATE: TypeHeadState   = {
  state: 'default',
  data: {},
  error: null
}

export const typeHeadReducer = (state: TypeHeadState = INITIAL_STATE, action: Action): TypeHeadState => {
  switch (action.type) {
    case 'LOAD_TYPEHEAD_SEARCH':
      return {
        ...state,
        error: null,
        state: 'loading'
      };
    case 'LOAD_TYPEHEAD_SEARCH_SUCCESS':
      return {
        state: 'default',
        data: action.payload,
        error: null
      };
    case 'TYPEHEAD_ERROR': 
      return {
        ...state,
        state: 'error',
        error: action.payload
      }
    default:
      return state;
  }
}