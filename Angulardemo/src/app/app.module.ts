import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuleComponent } from './module/module.component';
import { EmployeeComponent } from './employee/employee.component';
import { DeptDirectiveDirective } from './dept-directive.directive';
import { PipedemosComponent } from './pipedemos/pipedemos.component';
import { PowerpipePipe } from './powerpipe.pipe';
import { FormsModule } from '@angular/forms';
import { DeptfilterPipe } from './deptfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent,
    EmployeeComponent,
    DeptDirectiveDirective,
    PipedemosComponent,
    PowerpipePipe,
    DeptfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
