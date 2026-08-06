import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Category } from '../../../core/models/category.model';

import { AppState } from '../../../store/state/app.state';

import * as CategoryActions from '../../../store/actions/category.actions';

import {selectCategories,selectCategoryLoading} from '../../../store/selectors/category.selectors';

@Component({

  selector: 'app-categories',
  
  standalone: false,

  templateUrl: './categories.html',

  styleUrls: ['./categories.css']

})

export class Categories implements OnInit {

  categories$: Observable<Category[]>;

  loading$: Observable<boolean>;

  displayedColumns = [

    'id',

    'name',

    'description',

    'productCount',

    'status',

    'actions'

  ];

  constructor(private store: Store<AppState>) {

    this.categories$ = this.store.select(selectCategories);

    this.loading$ = this.store.select(selectCategoryLoading);

  }

  ngOnInit(): void {

    console.log('Dispatching Load Categories');

    this.store.dispatch(CategoryActions.loadCategories());

  }

}