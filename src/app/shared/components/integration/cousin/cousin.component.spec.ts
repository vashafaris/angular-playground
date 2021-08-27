import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CousinComponent } from './cousin.component';

describe('CousinComponent', () => {
  let component: CousinComponent;
  let fixture: ComponentFixture<CousinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CousinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CousinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
