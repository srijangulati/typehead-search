import { combineReducers } from 'redux';
import { typeHeadReducer, TypeHeadState } from './type-head-reducer';

export interface RootState {
  typeHead: TypeHeadState
}

export const reducers  = combineReducers<RootState>({
  typeHead: typeHeadReducer
});