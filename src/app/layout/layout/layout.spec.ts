import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Layout } from './layout';
import { Sidebar } from '../sidebar/sidebar';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

import { MaterialModule } from '../../shared/material/material.module';

describe('Layout', () => {

  let component: Layout;
  let fixture: ComponentFixture<Layout>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [
        Layout,
        Sidebar,
        Navbar,
        Footer
      ],

      imports: [
        MaterialModule,
        RouterTestingModule,
        NoopAnimationsModule
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(Layout);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});