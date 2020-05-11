import { NgModule } from '@angular/core';

import { MatButtonModule,MatCardModule,MatSelectModule, MatTableModule, MatSortModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { MatTableModule } from '@angular/material'  
// import {MatTableDataSource} from '@angular/material/table';

/**
 * Modulo para importar y exportar elementos de "ANGULAR MATERIAL".
 */
@NgModule({
    imports: [
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatMomentDateModule,
        MatInputModule,
        MatSlideToggleModule,
        MatCardModule,
        FormsModule, 
        ReactiveFormsModule,
        MatSelectModule,
        MatTableModule,
        MatSortModule
        // MatTableDataSource
    ],
    exports: [
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatMomentDateModule,
        MatInputModule,
        MatSlideToggleModule,
        MatCardModule,
        FormsModule, 
        ReactiveFormsModule,
        MatSelectModule,
        MatTableModule,
        MatSortModule
        // MatTableDataSource
    ]
})
export class MaterialModule 
{}