import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselCodingSnowModule } from './shared/components/carousel-coding-snow/carousel-coding-snow.module';
import { CarouselKevinPowellModule } from './shared/components/carousel-kevin-powell/carousel-kevin-powell.module';
import { IntegrationModule } from './shared/components/integration/integration.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CarouselCodingSnowModule,
    CarouselKevinPowellModule,
    IntegrationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
