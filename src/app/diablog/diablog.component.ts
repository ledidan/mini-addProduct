import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diablog',
  templateUrl: './diablog.component.html',
  styleUrls: ['./diablog.component.scss'],
})
export class DiablogComponent implements OnInit {
  kindProduct: string[] = ['New', 'Like new', 'Second hand'];
  productForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

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
    console.log(this.productForm.value);
  }
}
