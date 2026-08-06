import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { tap } from 'rxjs';
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

    tap(action => console.log('Incoming Action:', action)),

    ofType(CategoryActions.loadCategories),

    tap(() => console.log('Matched loadCategories')),

    mergeMap(() =>
      this.categoryService.getCategories().pipe(

        tap(data => console.log('JSON Data', data)),

        map(categories =>
          CategoryActions.loadCategoriesSuccess({ categories })
        )
      )
    )
  )
);

}

}