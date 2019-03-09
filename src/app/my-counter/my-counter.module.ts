import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyCounterComponent } from './my-counter.component';
@NgModule({
  declarations: [MyCounterComponent],
  imports: [
    CommonModule,
    FormsModule
    ],
  exports: [MyCounterComponent]
})
export class MyCounterModule { }
