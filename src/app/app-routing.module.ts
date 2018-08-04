import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReportsComponent } from './reports/reports.component';
import { PersonalComponent } from './personal/personal.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
  {
    path : '',
    component : FrontpageComponent
  },
  {
    path: 'personal',
    component : PersonalComponent
  },
  {
    path: 'all',
    component : ReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
