import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { StoreComponent } from './pages/store/store.component';

import { DynamicPageComponent } from './feature/dynamic-page/dynamic-page.component';

import { TextMediaComponent } from './blocks/text-media/text-media.component';
import { TextOnlyComponent } from './blocks/text-only/text-only.component';
import { MediaOnlyComponent } from './blocks/media-only/media-only.component';
import { PanelsComponent } from './blocks/panels/panels.component';
import { ButtonComponent } from './blocks/button/button.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CourseComponent } from './pages/store/course/course.component';
import { ProductComponent } from './pages/store/product/product.component';
import { MentoringComponent } from './pages/store/mentoring/mentoring.component';

@NgModule({
  declarations: [
    AppComponent,

    HomepageComponent,

    DynamicPageComponent,

    TextMediaComponent,
    TextOnlyComponent,
    MediaOnlyComponent,
    PanelsComponent,
    StoreComponent,
    ButtonComponent,
    CourseComponent,
    ProductComponent,
    MentoringComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MatButtonModule,
    MatCardModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
