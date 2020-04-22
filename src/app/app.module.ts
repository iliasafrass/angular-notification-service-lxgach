import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MatToolbarModule, MatIconModule, MatTooltipModule, MatButtonModule } from "@angular/material";

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { NotificationListComponent } from './notification.component';
import { NotificationService } from './notification.service';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, CommonModule,  MatToolbarModule,FlexLayoutModule,
    MatIconModule, MatTooltipModule, MatButtonModule],
  declarations: [ AppComponent, NotificationListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NotificationService]
})
export class AppModule { }

