import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DeviceDetailComponent } from './components/device-detail/device-detail.component';
import { DeviceService } from './services/device.service';
import { HttpClientModule } from '@angular/common/http';
import { SendUpdateComponent } from './components/send-update/send-update.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    SendUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
