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

@NgModule({
  declarations: [
    AppComponent,

    HomepageComponent,

    DynamicPageComponent,

    TextMediaComponent,
    TextOnlyComponent,
    MediaOnlyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
