import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import * as CategoryActions from '../actions/category.actions';
import { CategoryService } from '../../core/services/category.service';

@Injectable()
export class CategoryEffects {

    loadCategories$;

constructor(
  private actions$: Actions,
  private categoryService: CategoryService
) {

  console.log('===== Category Effects =====');
  console.log('Actions :', this.actions$);
  console.log('Category Service :', this.categoryService);

  this.loadCategories$ = createEffect(() =>
    this.actions$.pipe(

      ofType(CategoryActions.loadCategories),

      mergeMap(() =>
        this.categoryService.getCategories().pipe(

          map(categories =>
            CategoryActions.loadCategoriesSuccess({ categories })
          ),

          catchError(error =>
            of(
              CategoryActions.loadCategoriesFailure({
                error: error.message
              })
            )
          )

        )
      )

    )
  );

}

}