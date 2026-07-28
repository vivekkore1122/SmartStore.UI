import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../state/product.state';

// Feature Selector
export const selectProductState =
  createFeatureSelector<ProductState>('products');

// Get Product List
export const selectProducts = createSelector(
  selectProductState,
  (state) => state.products
);

// Loading State
export const selectLoading = createSelector(
  selectProductState,
  (state) => state.loading
);

// Error State
export const selectError = createSelector(
  selectProductState,
  (state) => state.error
);