import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddEmployeeComponent } from './app.addEmployee';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule, FormsModule, ReactiveFormsModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }