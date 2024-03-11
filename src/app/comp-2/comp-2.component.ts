import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
// import { Comp1Component } from '../comp-1/comp-1.component';



@Component({
  selector: 'app-comp-2',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,MatDividerModule,MatIconModule,CommonModule,MatButtonModule],
  templateUrl: './comp-2.component.html',
  styleUrl: './comp-2.component.css'
})

export class Comp2Component {
  foods = [
    {value: '0', viewValue: 'A'},
    {value: '1', viewValue: 'B'},
    {value: '2', viewValue: 'C'}
  ];
  
}
