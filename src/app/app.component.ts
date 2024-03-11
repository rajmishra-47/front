import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './comp-1/comp-1.component';
import { Comp2Component } from './comp-2/comp-2.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Comp3Component } from './comp-3/comp-3.component';
import { Comp4Component } from './comp-4/comp-4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,Comp1Component,Comp2Component,Comp3Component,Comp4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
