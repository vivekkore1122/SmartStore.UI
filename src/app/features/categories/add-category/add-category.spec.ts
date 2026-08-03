import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AddCategory } from './add-category';
import { MaterialModule } from '../../../shared/material/material.module';

describe('AddCategory', () => {

  let component: AddCategory;
  let fixture: ComponentFixture<AddCategory>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [
        AddCategory
      ],

      imports: [

        ReactiveFormsModule,
        MaterialModule,
        NoopAnimationsModule

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(AddCategory);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});