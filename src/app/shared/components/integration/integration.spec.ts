import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ParentComponent } from './parent/parent.component';

fdescribe('ParentComponent', () => {
  let component: ParentComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent, ChildComponent, GrandChildComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create child component', () => {
    const childComponent = de.query(By.css('app-child'));

    expect(childComponent).toBeTruthy();
  });

  it('should create child title', () => {
    const childTitle = de.query(By.css('[data-testid="ChildTitle"]'));

    expect(childTitle).toBeTruthy();
  });

  it('should show child title correctly', () => {
    const childTitle = de.query(By.css('[data-testid="ChildTitle"]'))
      .nativeElement.textContent;

    expect(childTitle).toContain(component.title);
  });

  it('should create grand child title', () => {
    const childTitle = de.query(By.css('[data-testid="GrandChildTitle"]'));

    expect(childTitle).toBeTruthy();
  });
});
