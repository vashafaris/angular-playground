import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { CousinComponent } from './cousin/cousin.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent, GrandChildComponent, CousinComponent],
  imports: [CommonModule],
  exports: [ParentComponent],
})
export class IntegrationModule {}
