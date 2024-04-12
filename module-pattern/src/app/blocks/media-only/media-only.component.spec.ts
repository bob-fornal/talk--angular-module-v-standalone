import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaOnlyComponent } from './media-only.component';

describe('MediaOnlyComponent', () => {
  let component: MediaOnlyComponent;
  let fixture: ComponentFixture<MediaOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaOnlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
