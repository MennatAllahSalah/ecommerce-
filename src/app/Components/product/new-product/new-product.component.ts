import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ICategory } from 'src/app/Models/icategory';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  newPrd!: IProduct;
  catList: ICategory[]=[];

  constructor(private productService:ProductService,private router:Router,private formBuilder:FormBuilder) { 

    
  }

  ngOnInit(): void {
  }
  saveProduct()
  {
    this.productService.AddNewProduct(this.newPrd).subscribe(prd=>{
      this.router.navigate(['/Products']);
    });
  }

}
