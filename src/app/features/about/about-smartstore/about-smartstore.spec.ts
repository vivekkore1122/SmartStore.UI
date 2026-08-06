import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSmartstore } from './about-smartstore';

describe('AboutSmartstore', () => {
  let component: AboutSmartstore;
  let fixture: ComponentFixture<AboutSmartstore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutSmartstore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSmartstore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
