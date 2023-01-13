import { ProductList } from './../product-list.model';
import { ApiService } from './Service/api.service';
import { DiablogComponent } from './diablog/diablog.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NgMiniAddProduct';
  displayedColumns: string[] = [
    'productName',
    'category',
    'date',
    'kindProduct',
    'price',
    'comment',
    'action',
  ];
  dataSource: MatTableDataSource<ProductList[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private ApiService: ApiService) {}
  ngOnInit(): void {
    this.getAllProducts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DiablogComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getAllProducts() {
    return this.ApiService.getProduct().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('Cannot fetching data');
      },
    });
  }
  editProduct(row: any) {
    this.dialog.open(DiablogComponent, {
      width: '30%',
      data: row,
    });
  }
}
