import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  GetAllProducts():Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.BaseAPIURL}/Product`)
    

  }
  getProductByID(prdID: number)
{
 return this.GetAllProducts().pipe(map((products:IProduct[])=>products.find(prd=>prd.id==prdID)))
}
  
  getPrdIDsList()
  {

   return this.GetAllProducts().pipe(map((products:IProduct[])=>products.map(product=>product.id)))
    
  }
 
  GetAllProductByID(ProductId:number):Observable<IProduct>
  {

   return this.httpClient.get<IProduct>(`${environment.BaseAPIURL}/Product/id=${ProductId}`)

  }

  GetAllProductsByCatID(CategoryID:number):Observable<IProduct[]>
  {
   return this.httpClient.get<IProduct[]>(`${environment.BaseAPIURL}/Product?categoryid=${CategoryID}`);

   
  }

  AddNewProduct(newProduct:IProduct):Observable<IProduct>
  {

   return this.httpClient.post<IProduct>(`${environment.BaseAPIURL}/Product`,JSON.stringify(newProduct));

  }
  EditProduct(ProductId:number, newProduct:IProduct):Observable<IProduct>
  {
   return this.httpClient.put<IProduct>(`${environment.BaseAPIURL}/Product?id=${ProductId}`,JSON.stringify(newProduct));

  }
  UbdateProduct(ProductId:number, newProduct:IProduct):Observable<IProduct>
  {
   return this.httpClient.put<IProduct>(`${environment.BaseAPIURL}/Product?id=${ProductId}`,JSON.stringify(newProduct));

  }

  DeleteProduct(ProductId:number)
  {
return this.httpClient.delete(`${environment.BaseAPIURL}/Product?id=${ProductId}`);
   
  }
}
