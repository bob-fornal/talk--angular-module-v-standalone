import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomepageComponent } from './pages/homepage/homepage.component';

import { DynamicPageComponent } from './feature/dynamic-page/dynamic-page.component';

import { TextMediaComponent } from './blocks/text-media/text-media.component';
import { TextOnlyComponent } from './blocks/text-only/text-only.component';
import { MediaOnlyComponent } from './blocks/media-only/media-only.component';
import { PanelsComponent } from './blocks/panels/panels.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCardModule } from '@angular/material/card';
import { StoreComponent } from './pages/store/store.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MatCardModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
