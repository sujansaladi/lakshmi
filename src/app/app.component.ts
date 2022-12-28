import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Data, Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { DellserviceService } from './dellservice.service';
import { NgForm } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const table1: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  

  
})



export class AppComponent implements OnInit,OnDestroy{
  
title = 'project2';
username: any;
json: any;
dateobject: any;
text: any;
Value:any;
dataSource:any;
  http: any;
  constructor(private route: Router,private service:DellserviceService){

  
console.log('sujan');
  }
  ngOnInit(){
     this.service.getDeatils().subscribe((res: any) => {
      console.log(res)
      this.dataSource = res.data;
    });
    console.log(this.dataSource)
  }
  
  ngOnDestroy(){
    console.log('sai');
  }
  gotoC1(){
    this.route.navigateByUrl('path1')
  }
  gotoC2(){
    this.route.navigateByUrl('path2')
  }

  d:string=new Date().toLocaleDateString()

  timeid=setInterval(()=>{
    this.d=new Date().toLocaleDateString()
  },1000)
  
   tittle={name:"sujan",age:23}
   
   dateobject1= new Date();
  
  // name="sujan saladi";
   pipe=50000;
   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(table1);

// }
}



