import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReportsComponent } from './reports/reports.component';

import { DataStudentService } from './data-student.service';
import { ResultViewComponent } from './result-view/result-view.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PersonalComponent } from './personal/personal.component';
import { FrontpageComponent } from './frontpage/frontpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReportsComponent,
    ResultViewComponent,
    PersonalComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ResultViewComponent
  ],
  providers: [ DataStudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
