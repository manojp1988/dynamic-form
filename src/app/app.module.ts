import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { CustomTextComponent } from './custom-text/custom-text.component';

@NgModule({
  declarations: [AppComponent, InputGroupComponent, CustomTextComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
