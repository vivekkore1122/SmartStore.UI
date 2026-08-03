import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Sidebar } from './sidebar';
import { MaterialModule } from '../../shared/material/material.module';

describe('Sidebar', () => {

  let component: Sidebar;
  let fixture: ComponentFixture<Sidebar>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [
        Sidebar
      ],

      imports: [
        MaterialModule,
        RouterTestingModule,
        NoopAnimationsModule
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(Sidebar);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});