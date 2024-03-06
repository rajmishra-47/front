import { Component } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-comp-1',
  standalone: true,
  imports: [HttpClientModule,FormsModule,MatButtonModule,MatDividerModule,MatFormFieldModule,MatIconModule,MatInputModule,MatSelectModule,MatSelectModule,MatTableModule,CommonModule,RouterOutlet],
  templateUrl: './comp-1.component.html',
  styleUrl: './comp-1.component.css'
})


export class Comp1Component {


  constructor(private http: HttpClient) { }

  jsn:any

  labels:any
  Value:any

  public chart: any;
  chartDisabled: boolean = false;

plotChart(Value:any):any{
  if (!this.chartDisabled) {
    // Check if a chart instance already exists
    if (this.chart) {
      this.chart.destroy(); // Destroy the existing chart instance
    }
    // Create a new chart instance
    this.chart = new Chart("Chart-1", {
      type: 'pie',
      data: {
        datasets: [{ data: this.Value, backgroundColor: ['Red', 'blue', 'Green', 'Yellow'] }]
      },
      options: { aspectRatio: 2.5 }
    });
  }
}


  ngOnInit() {

    this.http.get('http://localhost:8000/show').subscribe( (data) =>{
      this.jsn=data



    this.labels=this.jsn.map( (data:any) => data.wellname  )
    console.log(this.labels);

    this.Value=this.jsn.map((data:any)=>Number(data.wellval) )
    console.log(this.Value);

  this.plotChart(this.Value)
  })
  }


  displayedColumns: string[] = ['lable', 'num'];

  applyChange(){
    this.labels=this.jsn.map((data:any)=>(data.wellname) )
    console.log(this.labels);

    this.Value=this.jsn.map((data:any)=>Number(data.wellval) )
    console.log(this.Value);

    this.plotChart(this.Value)
  }

  onRowClicked(dummy:any){};
  editflag:boolean=false;


    editButtonClicked(){
      this.editflag=!this.editflag;
      this.chartDisabled = !this.chartDisabled;
    }
}
