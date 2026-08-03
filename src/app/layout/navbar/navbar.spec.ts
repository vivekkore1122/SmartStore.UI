import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Navbar } from './navbar';
import { MaterialModule } from '../../shared/material/material.module';

describe('Navbar', () => {

  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [
        Navbar
      ],

      imports: [
        MaterialModule,
        RouterTestingModule,
        NoopAnimationsModule
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});