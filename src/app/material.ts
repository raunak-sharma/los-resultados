import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports:
    [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatListModule, MatDialogModule, MatTableModule],
    exports:
    [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatListModule, MatDialogModule, MatTableModule],
})

export class MaterialModule {  }