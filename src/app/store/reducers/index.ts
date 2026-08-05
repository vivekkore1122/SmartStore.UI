import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';

import { productReducer } from './product.reducer';
import { categoryReducer } from './category.reducer';

export const reducers: ActionReducerMap<AppState> = {

  products: productReducer,

  categories: categoryReducer

};