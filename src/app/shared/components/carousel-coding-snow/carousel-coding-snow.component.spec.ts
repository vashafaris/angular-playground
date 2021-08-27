import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCodingSnowComponent } from './carousel-coding-snow.component';

describe('CarouselCodingSnowComponent', () => {
  let component: CarouselCodingSnowComponent;
  let fixture: ComponentFixture<CarouselCodingSnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCodingSnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCodingSnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
