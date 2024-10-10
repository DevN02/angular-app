import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';






// const data : Product[] = [
//   { name : "John" , id : "1" , price : },
//   { name : "Emily" , id : "2" , price : "IT"},
//   { name : "Akshay" , id : "3" , price : "EXTC"},
//   { name : "Yash" , id : "4" , price : "Mechanical"},
//   { name : "Imran" , id : "5" , price : "Electronics"},
//   { name : "Aditya" , id : "6" , price : "CS"},
// ]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  // constructor(private http : HttpClient){

  // }
  title = 'sample-app';
  
  // displayedColumns: string[] = ['rollno', 'name', 'branch'];
  // dataSource : Product[] = [];

  


  // ngOnInit(): void {
  //   this.http.get<Product[]>('https://98ana9rhh2.execute-api.ap-south-1.amazonaws.com/get').subscribe({
  //     next : (val) => {
  //       this.dataSource = val
  //       console.log(this.dataSource);
        
  //     }
  //   })
  // }
}
