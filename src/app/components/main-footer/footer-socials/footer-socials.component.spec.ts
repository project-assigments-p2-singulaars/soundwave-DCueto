import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSocialsComponent } from './footer-socials.component';

describe('FooterSocialsComponent', () => {
  let component: FooterSocialsComponent;
  let fixture: ComponentFixture<FooterSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSocialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
