import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselKevinPowellComponent } from './carousel-kevin-powell.component';

describe('CarouselKevinPowellComponent', () => {
  let component: CarouselKevinPowellComponent;
  let fixture: ComponentFixture<CarouselKevinPowellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselKevinPowellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselKevinPowellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
