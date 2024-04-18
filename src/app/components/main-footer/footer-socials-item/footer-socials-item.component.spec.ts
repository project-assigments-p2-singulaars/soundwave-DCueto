import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSocialsItemComponent } from './footer-socials-item.component';

describe('FooterSocialsItemComponent', () => {
  let component: FooterSocialsItemComponent;
  let fixture: ComponentFixture<FooterSocialsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSocialsItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSocialsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
