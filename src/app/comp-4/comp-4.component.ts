import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-comp-4',
  standalone: true,
  imports: [MatInputModule,MatSelectModule,MatFormFieldModule,MatTableModule,MatIconModule,MatDividerModule,MatButtonModule],
  templateUrl: './comp-4.component.html',
  styleUrl: './comp-4.component.css'
})
export class Comp4Component {

  Table=[{name:"Captured",Value:1111},
        {name:"Injected",Value:11111}]

        display:any=['name','Value']
}
