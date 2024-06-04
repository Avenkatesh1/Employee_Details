import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';




const materialUI:any[]= [MatToolbarModule,
                         MatGridListModule,
                         MatFormFieldModule,
                         MatInputModule,
                         MatRadioModule,]

@NgModule({
  imports: [materialUI,
    CommonModule],
  exports: [materialUI],
})
export class EmpmoduleModule { }
