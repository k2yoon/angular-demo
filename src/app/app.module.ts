import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KaiNavComponent } from './kai-nav/kai-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatMenuModule, MatTableModule,
  MatPaginatorModule, MatSortModule } from '@angular/material';
import { KaiTableComponent } from './kai-table/kai-table.component';
import { KaiComponent1Component } from './kai-component1/kai-component1.component';
import { KaiLogoutComponent } from './kai-logout/kai-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    KaiNavComponent,
    KaiTableComponent,
    KaiComponent1Component,
    KaiLogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
