import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedAccordionComponent } from './components/nested-accordion/nested-accordion.component';
import { ComponentRowComponent } from './components/component-row/component-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedAccordionComponent,
    ComponentRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
