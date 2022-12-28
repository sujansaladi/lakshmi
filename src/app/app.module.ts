import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { SamplePipe } from './sample.pipe';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    SamplePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
   

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
