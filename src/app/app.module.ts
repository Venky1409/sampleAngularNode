import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { SampleService } from './services/sample.service';

@NgModule({
  imports: [
     CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
