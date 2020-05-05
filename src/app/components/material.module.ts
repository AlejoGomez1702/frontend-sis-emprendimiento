import { NgModule } from '@angular/core';

import { MatButtonModule,MatCardModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
        ReactiveFormsModule
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
        ReactiveFormsModule
    ]
})
export class MaterialModule 
{}