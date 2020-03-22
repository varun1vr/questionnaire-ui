import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [QuestionComponent, HomeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    HomeComponent,
    QuestionComponent,
    MatButtonModule,
    MatSelectModule,
    NgSelectModule,
    FormsModule
  ],
})
export class QuestionModule { }
