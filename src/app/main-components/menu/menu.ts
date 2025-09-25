import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../_services/product-service';
import { ProductModel } from '../../_models/productModel';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {

constructor(private productService: ProductService){

}
products:ProductModel[];


ngOnInit(): void {
  this.getProducts();
}

getProducts(){
  this.productService.getAll().subscribe({
    next: values=> this.products=values,
    error: err=> console.log(err)
  })
}


}
