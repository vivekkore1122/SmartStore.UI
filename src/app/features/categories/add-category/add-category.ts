import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.html',
  styleUrl: './add-category.css'
})
export class AddCategory implements OnInit {

  categoryForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.categoryForm = this.fb.group({

      categoryName: ['', Validators.required],

      description: ['', [Validators.required, Validators.minLength(10)]]

    });

  }

  onSubmit(): void {

    if (this.categoryForm.invalid) {

      this.categoryForm.markAllAsTouched();
      return;

    }

    console.log('Category Saved Successfully');
    console.log(this.categoryForm.value);

  }

}