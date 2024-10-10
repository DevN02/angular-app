import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: number;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  constructor(private http : HttpClient){

  }
  title = 'sample-app';
  
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource : Product[] = [];

  


  ngOnInit(): void {
    this.http.get<Product[]>('https://98ana9rhh2.execute-api.ap-south-1.amazonaws.com/get').subscribe({
      next : (val) => {
        this.dataSource = val
        console.log(this.dataSource);
      }
    })
  }
}
