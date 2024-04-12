import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOnlyComponent } from './text-only.component';

describe('TextOnlyComponent', () => {
  let component: TextOnlyComponent;
  let fixture: ComponentFixture<TextOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextOnlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
