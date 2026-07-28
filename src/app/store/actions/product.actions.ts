import { createAction, props } from '@ngrx/store';

/* Load Products */
export const loadProducts = createAction(
  '[Product] Load Products'
);

/* Load Products Success */
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: any[] }>()
);

/* Load Products Failure */
export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: string }>()
);