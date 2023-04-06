import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';

const components = [
  TableComponent
]


@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
