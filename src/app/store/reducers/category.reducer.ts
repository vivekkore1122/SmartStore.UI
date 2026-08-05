import { createReducer, on } from '@ngrx/store';
import * as CategoryActions from '../actions/category.actions';

import {
  CategoryState,
  initialCategoryState
} from '../state/category.state';

export const categoryReducer = createReducer(

  initialCategoryState,

  on(CategoryActions.loadCategories, state => ({
    ...state,
    loading: true
  })),

  on(CategoryActions.loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
    loading: false
  })),

  on(CategoryActions.loadCategoriesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))

);