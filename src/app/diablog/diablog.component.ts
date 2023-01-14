import { ApiService } from './../Service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductList } from 'src/product-list.model';

@Component({
  selector: 'app-diablog',
  templateUrl: './diablog.component.html',
  styleUrls: ['./diablog.component.scss'],
})
export class DiablogComponent implements OnInit {
  kindProduct: string[] = ['New', 'Like new', 'Second hand'];
  productForm!: FormGroup;
  actionBtn: string = 'Save';
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: ProductList,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<DiablogComponent>
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      kindProduct: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required],
    });
    if (this.editData) {
      this.actionBtn = 'update';
      this.productForm.controls['productName'].setValue(
        this.editData.productName
      );
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['kindProduct'].setValue(
        this.editData.kindProduct
      );
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['comment'].setValue(this.editData.comment);
      this.productForm.controls['date'].setValue(this.editData.date);
    }
  }
  addProduct() {
    if (!this.editData) {
      if (this.productForm.valid) {
        this.apiService.postProduct(this.productForm.value).subscribe({
          next: (res) => {
            alert('Product added successfully');
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Error while adding product');
          },
        });
      }
    } else {
      this.updateProduct();
    }
  }
  updateProduct() {
    this.apiService
      .putProduct(this.editData.id, this.productForm.value)
      .subscribe({
        next: (res) => {
          alert('Update successfully');
          this.productForm.reset();
          this.dialogRef.close('update');
        },
        error: (err) => {
          alert('Failed to update product');
        },
      });
  }
}
