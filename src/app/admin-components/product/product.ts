import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../_services/product-service';
import { ProductModel } from '../../_models/productModel';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {

constructor(private productService:ProductService){

}
products:ProductModel[];

ngOnInit(): void {
  this.getAll();
}


getAll(){
  this.productService.getAll().subscribe({
    next: values => this.products=values,
    error: err => console.log(err)
  })
};



}
