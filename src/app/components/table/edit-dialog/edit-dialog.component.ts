import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Component ,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  constructor(private dialog : MatDialog , @Inject(MAT_DIALOG_DATA) public bookingData : any,private fb: FormBuilder,private http : HttpClient ){
    // console.log(bookingData);
    this.productForm = this.fb.group({
      id: [bookingData.editData.id , Validators.required],
      name: [bookingData.editData.name, Validators.required],
      price: [bookingData.editData.price]
    });

    console.log(this.productForm.value);
    
  }

  productForm !: FormGroup

  saveData(){

    const body = {
      id : this.productForm.get('id')?.value,
      key : "name",
      name : this.productForm.get('name')?.value
    }
    console.log(body);
    
    this.http.put('https://98ana9rhh2.execute-api.ap-south-1.amazonaws.com/put' , body).subscribe({
      next : (val) => {
        console.log(val);
        alert("Data update successfully")
        window.location.reload()
      }
    })
  }
}
