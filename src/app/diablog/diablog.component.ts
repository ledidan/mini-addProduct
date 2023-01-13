import { ApiService } from './../Service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-diablog',
  templateUrl: './diablog.component.html',
  styleUrls: ['./diablog.component.scss'],
})
export class DiablogComponent implements OnInit {
  kindProduct: string[] = ['New', 'Like new', 'Second hand'];
  productForm!: FormGroup;
  constructor(
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
  }
  addProduct() {
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
  }
}
