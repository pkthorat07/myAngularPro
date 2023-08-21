import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ToastrModule } from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';




@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatTableModule,  
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),


    
  ],

  exports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,
    

  ]
})

export class ShareModule { }
