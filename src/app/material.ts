import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports:
    [MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatIconModule, MatListModule, MatDialogModule, MatTableModule,
    MatSelectModule, MatSlideToggleModule, MatInputModule,
    FlexLayoutModule, MatSidenavModule, MatTabsModule, MatExpansionModule],
    exports:
    [MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatIconModule, MatListModule, MatDialogModule, MatTableModule,
    MatSelectModule, MatSlideToggleModule, MatInputModule,
    FlexLayoutModule, MatSidenavModule, MatTabsModule, MatExpansionModule],
})

export class MaterialModule {  }