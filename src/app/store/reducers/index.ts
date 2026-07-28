import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.state';
import { productReducer } from './product.reducer';

export const reducers: ActionReducerMap<AppState> = {
  products: productReducer
};