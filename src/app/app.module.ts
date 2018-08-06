import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FooterComponent } from './footer/footer.component';
import { ReportsComponent } from './reports/reports.component';

import { DataStudentService } from './data-student.service';
import { ResultViewComponent } from './result-view/result-view.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PersonalComponent } from './personal/personal.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ReportsComponent,
    ResultViewComponent,
    PersonalComponent,
    FrontpageComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  entryComponents: [
    ResultViewComponent
  ],
  providers: [ DataStudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }