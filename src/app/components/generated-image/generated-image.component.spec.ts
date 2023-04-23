import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedImageComponent } from './generated-image.component';

describe('GeneratedImageComponent', () => {
  let component: GeneratedImageComponent;
  let fixture: ComponentFixture<GeneratedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
