import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CategoryState } from '../state/category.state';

export const selectCategoryState =
  createFeatureSelector<CategoryState>('categories');

export const selectCategories = createSelector(

  selectCategoryState,

  state => state.categories

);

export const selectCategoryLoading = createSelector(

  selectCategoryState,

  state => state.loading

);

export const selectCategoryCount = createSelector(

  selectCategories,

  categories => categories.length

);