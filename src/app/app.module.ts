import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KontoComponent } from './konto/konto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KontoTableComponent } from './konto-table/konto-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout';

import { KontoDetailComponent } from './konto-detail/konto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    KontoComponent,
    KontoTableComponent,
    KontoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
