import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Chart from 'chart.js/auto';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import * as _ from 'lodash';

import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-3',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './comp-3.component.html',
  styleUrl: './comp-3.component.css',
})
export class Comp3Component {
  constructor(private http: HttpClient) {}

  a: number = 0;
  b: number = 0;

  Wells: any;
  WellsName: any;
  WellsVal: any[] = [];

  Res: any;
  ResName: any;
  ResVal: any;

  TotalName: any ;
  TotalVal: any;

  chart1: any;
  chart2: any;
  chart3: any;

  chartDisabled: boolean = false;

  editflag1: boolean = false;
  editflag2: boolean = false;

  Wflag: boolean = false;
  Rflag: boolean = false;

  Wb1: string = 'Edit';
  Rb1: string = 'Edit';

  v: any = 1;

  t1: any;

  s1=0
  s2=0

  Total:any

  onRowClicked(dummy: any) {}

  displayedColumns: string[] = ['lable', 'num'];

  ngOnInit() {
    this.http.get('http://localhost:8000/showWell').subscribe((data: any) => {
      this.Wells = data;

      this.WellsName = this.Wells.map((data: any) => data.wname);

      this.WellsVal = this.Wells.map((data: any) => Number(data.wval));
      this.createChart2(this.WellsName, this.WellsVal);
      // this.TotalVal.push(_.sum(this.WellsVal));
      
      this.WellsVal.forEach(num=> this.s1+=num)

      console.log(this.s1);
      
    });

    this.http.get('http://localhost:8000/showRes').subscribe((data: any) => {
      this.Res = data;
      this.ResName = this.Res.map((data: any) => data.resName);
      this.ResVal = this.Res.map((data: any) => Number(data.resval));

      this.createChart3(this.ResName, this.ResVal);

      this.ResVal.forEach((e:number) => {
        this.s2+=e
      });
   
      console.log(this.s2);

      this.Total=[ {name:'Site-1',Val:this.s1},
    
                    {name:"Site-2",Val:this.s2}]


                    console.log(this.Total);

            
      this.TotalName=this.Total.map((data:any)=>data.name)
                    

      this.TotalVal=this.Total.map((data:any)=>data.Val)

      this.createChart1(this.TotalName,this.TotalVal)
      
    });

    // console.log(this.TotalVal);
  }

  createChart1(Label: any, Data: any) {
    if (!this.chartDisabled) {
      if (this.chart1) {
        this.chart1.destroy();
      }

      this.chart1 = new Chart('MyChart-1', {
        type: 'pie',

        data: {
          datasets: [
            {
              label: Label,
              data: Data,
              backgroundColor: ['Red', 'Blue', 'Green', 'Yellow'],
            },
          ],
        },
        options: { aspectRatio: 2. },
      });
    }
  }
  createChart2(Label: any, Data: any) {
    if (!this.chartDisabled) {
      if (this.chart2) {
        this.chart2.destroy();
      }

      this.chart2 = new Chart('MyChart-2', {
        type: 'pie',

        data: {
          datasets: [
            {
              label: Label,
              data: Data,
              backgroundColor: ['Red', 'Blue', 'Green', 'Yellow'],
            },
          ],
        },
        options: { aspectRatio: 2. },
      });
    }
  }

  createChart3(Label: any, Data: any) {
    if (!this.chartDisabled) {
      if (this.chart3) {
        this.chart3.destroy();
      }

      this.chart3 = new Chart('MyChart-3', {
        type: 'pie',

        data: {
          datasets: [
            {
              label: Label,
              data: Data,
              backgroundColor: ['Red', 'Blue', 'Green', 'Yellow'],
            },
          ],
        },
        options: { aspectRatio: 2.0 },
      });
    }
  }

  editButtonClicked1() {
    this.Wflag = !this.Wflag;

    if (this.Wflag) {
      this.Wb1 = 'Save';
    } else {
      this.Wb1 = 'Edit';
    }

    this.editflag1 = !this.editflag1;
    this.chartDisabled = !this.chartDisabled;
  }

  editButtonClicked2() {
    this.Rflag = !this.Rflag;

    if (this.Rflag) {
      this.Rb1 = 'Save';
    } else {
      this.Rb1 = 'Edit';
    }

    this.editflag2 = !this.editflag2;
    this.chartDisabled = !this.chartDisabled;
  }

  applyChange() {
    this.WellsVal = this.Wells.map((data: any) => Number(data.wval));

    this.ResVal = this.Res.map((data: any) => Number(data.resval));

    this.createChart2(this.WellsName, this.WellsVal);

    console.log(this.Wells, this.WellsVal);

    this.createChart3(this.ResName, this.ResVal);

    this.s1=this.s2=0

    this.WellsVal.forEach((num:any)=> this.s1+=num)

    this.ResVal.forEach((num:any)=> this.s2+=num)
 
    console.log(this.s2);

    this.Total=[ {name:'Site-1',Val:this.s1},
  
                  {name:"Site-2",Val:this.s2}]

          
    this.TotalName=this.Total.map((data:any)=>data.name)
                  
    this.TotalVal=this.Total.map((data:any)=>data.Val)

    this.createChart1(this.TotalName,this.TotalVal)

    console.log(this.TotalVal);
    
  }

  // valueControl = new FormControl('', { updateOn: 'blur' });
  element: any = { wval: 0 };
  checkInputValue(inputField: HTMLInputElement) {
    if (parseInt(inputField.value) < 0) {
      inputField.value = '1';
      // You can also update the model value here if needed
      this.element.wval = 1;
    }
  }
}
