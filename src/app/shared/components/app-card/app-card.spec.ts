import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCard } from './app-card';

describe('AppCard', () => {
  let component: AppCard;
  let fixture: ComponentFixture<AppCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
