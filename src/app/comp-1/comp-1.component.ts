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
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-comp-1',
  standalone: true,
  imports: [HttpClientModule,FormsModule,MatButtonModule,MatDividerModule,MatFormFieldModule,MatIconModule,MatInputModule,MatSelectModule,MatSelectModule,MatTableModule,CommonModule,RouterOutlet],
  templateUrl: './comp-1.component.html',
  styleUrl: './comp-1.component.css'
})


export class Comp1Component {


  constructor(private http: HttpClient) { }

  table:any=[
    {name:"Raj", age:22},
    {name:"Lav", age:42}
              ]

    Age:any;

  jsn:any

  labels:any
  Value:any

  public chart1: any;
  
  public chart2: any;

  public chart3: any;

  chartDisabled: boolean = false;

  



plotChart(Value:any):any{
  if (!this.chartDisabled) {
   
    if (this.chart1,this.chart2) {
      this.chart1.destroy();
      this.chart2.destroy();
    }
   
    this.chart1 = new Chart("Chart-1", {
      type: 'pie',
      data: {
        datasets: [{ data: this.Value, backgroundColor: ['Red', 'blue', 'Green', 'Yellow'] }]
      },
      options: { aspectRatio: 2.0 }
    });

    this.chart2 = new Chart("Chart-2", {
      type: 'pie',
      data: {
        datasets: [{ data: this.Value, backgroundColor: ['Red', 'blue', 'Green', 'Yellow'] }]
      },
      options: { aspectRatio:2.0 }
    });
  }
}

plotChart3(Value:any):any{
  if (!this.chartDisabled) {
   
    if (this.chart3) {
      this.chart3.destroy();
    }

 
    this.chart3 = new Chart("Chart-3", {
      type: 'pie',
      data: {
        datasets: [{ data: this.Age, backgroundColor: ['Red', 'blue'] }]
      },
      options: { aspectRatio: 1.5 }
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

    this.Age=this.table.map((data:any)=>Number(data.age) )
  this.plotChart(this.Value)
  this.plotChart3(this.Age)
  })
  }


  displayedColumns: string[] = ['lable', 'num'];

  applyChange(){
    this.labels=this.jsn.map((data:any)=>(data.wellname) )
    console.log(this.labels);

    this.Value=this.jsn.map((data:any)=>Number(data.wellval) )
    console.log(this.Value);

    this.Age=this.table.map((data:any)=>Number(data.age) )

    this.plotChart(this.Value)

    this.plotChart3(this.Age)
    
  }

  onRowClicked(dummy:any){};
  editflag:boolean=false;

  editflag1:boolean=false;

    editButtonClicked(){
      this.editflag=!this.editflag;
      this.chartDisabled = !this.chartDisabled;
    }


    editButtonClicked1(){
      this.editflag1=!this.editflag1;
      this.chartDisabled = !this.chartDisabled;
    }

    


  
}
