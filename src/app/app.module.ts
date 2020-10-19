import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployesComponent } from './employes/employes.component';
import { EmployeComponent } from './employes/employe/employe.component';
import { EmployeService } from './employe.service';
import { MaterialModule } from './employes/employe/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    EmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
