
import { Component, OnInit ,OnChanges,OnDestroy,EventEmitter, Output} from '@angular/core';
//import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductsComponent implements OnInit {

  productList:IProduct[]=[];
  categoryList : ICategory[]=[];
  progress: number=0;
  message: string='null';
  @Output() public onUploadFinished = new EventEmitter();

    constructor(private formBuilder:FormBuilder ,public dialog: MatDialog,
      private prodService:ProductService, private router: Router,
      private catapiservice : CategoryService
    
      ) { }

       openDialog() {
        this.dialog.open(DialogComponent, {
         width : '30%'
        });
      }
     
      // openDetailsDialog(id:number){
      //   const dialogConfig = new MatDialogConfig();
      //   dialogConfig.data=id;
      //   this.dialog.open(ProductDetailsComponent,dialogConfig);
      // }
 
ngOnChanges(): void {
  
  
 }
    ngOnInit(): void {
      this.prodService.GetAllProducts().subscribe(prdList=>{this.productList=prdList;});
      this.catapiservice.GetAllCategories().subscribe(catlist=>{this.categoryList=catlist});


    }
    
    deleteProduct(id:number)
    {
  
      this.prodService.DeleteProduct(id).subscribe( pro=>{
        console.log("product deleted");
        this.router.navigate(['/product']);

      });
    }
    DecreaseQuantity(prd:IProduct){
      prd.quantity=prd.quantity-1;
    }
  }