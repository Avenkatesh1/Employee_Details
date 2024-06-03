import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';


const materialUI:any[]= [MatToolbarModule,]

@NgModule({
  imports: [materialUI,
    CommonModule],
  exports: [materialUI],
})
export class EmpmoduleModule { }
