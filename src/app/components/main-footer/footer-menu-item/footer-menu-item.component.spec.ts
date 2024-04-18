import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMenuItemComponent } from './footer-menu-item.component';

describe('FooterMenuItemComponent', () => {
  let component: FooterMenuItemComponent;
  let fixture: ComponentFixture<FooterMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMenuItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
