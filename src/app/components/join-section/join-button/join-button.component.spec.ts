import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinButtonComponent } from './join-button.component';

describe('JoinButtonComponent', () => {
  let component: JoinButtonComponent;
  let fixture: ComponentFixture<JoinButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
