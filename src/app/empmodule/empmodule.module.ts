import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';



const materialUI:any[]= [MatToolbarModule,
                         MatGridListModule,
                         MatFormFieldModule,
                         MatInputModule,
                         MatRadioModule,
                         MatSelectModule,
                         MatNativeDateModule,
                         MatDatepickerModule,
                         MatCheckboxModule,
                         MatButtonModule]

@NgModule({
  imports: [materialUI,
    CommonModule],
  exports: [materialUI],
})
export class EmpmoduleModule { }
