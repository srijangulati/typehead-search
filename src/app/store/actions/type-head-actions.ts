import axios from "axios";

export const loadSearch = (payload: string) => {
  return {
    type: 'LOAD_TYPEHEAD_SEARCH',
    payload
  };
}

export const loadSearchSuccess = (payload: any[]) => {
  return {
    type: 'LOAD_TYPEHEAD_SEARCH_SUCCESS',
    payload
  };
}

export const loadSearchError = (payload: any) => {
  return {
    type: 'TYPEHEAD_ERROR',
    payload
  }
}

var cancelTokenSource: any;

// Middleware
export const fetchTypeHeadResults = (query: string) => (dispatch: any) => {
  if (cancelTokenSource) {
    cancelTokenSource.cancel();
  }
  cancelTokenSource = axios.CancelToken.source();
  dispatch(loadSearch(query));
  axios.get(`http://hn.algolia.com/api/v1/search?query=${query}&tags=story&hitsPerPage=10`, {
    cancelToken: cancelTokenSource.token
  })
    .then(
      ({data}) => dispatch(loadSearchSuccess(data)),
      (error) => dispatch(loadSearchError(error))
    )
    .finally(() => cancelTokenSource = null)
}