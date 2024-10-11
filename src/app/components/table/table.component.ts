import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';


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
  constructor(private http : HttpClient , private dialog : MatDialog){

  }
  title = 'sample-app';
  
  displayedColumns: string[] = ['id', 'name', 'price','edit','delete'];
  dataSource : Product[] = [];


  EditElement(product : Product){

    const dialogRef = this.dialog.open(EditDialogComponent, {
      data : {
        editData : product
      }
    })
  }

  deleteElement(product : Product){
    this.http.delete(`https://98ana9rhh2.execute-api.ap-south-1.amazonaws.com/delete?id=${product.id}`).subscribe({
      next : (val) => {
        console.log(val);
        alert("Deleted Entry")
        window.location.reload()
      }
    })
  }

  ngOnInit(): void {
    this.http.get<Product[]>('https://98ana9rhh2.execute-api.ap-south-1.amazonaws.com/get').subscribe({
      next : (val) => {
        this.dataSource = val
        console.log(this.dataSource);
      }
    })
  }
}
