import { createReducer, on } from '@ngrx/store';
import { initialProductState } from '../state/product.state';
import * as ProductActions from '../actions/product.actions';

export const productReducer = createReducer(

  initialProductState,

  // Load Products
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  // Load Products Success
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
    error: null
  })),

  // Load Products Failure
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))

);