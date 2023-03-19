import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [HomeComponent, CarouselComponent, SectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
  ],
})
export class HomeModule {}
