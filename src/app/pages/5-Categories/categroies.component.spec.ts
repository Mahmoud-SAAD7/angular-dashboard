import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategroiesComponent } from './categroies.component';

describe('CategroiesComponent', () => {
  let component: CategroiesComponent;
  let fixture: ComponentFixture<CategroiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategroiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategroiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
