import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../../Models/Product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() productListComp: ProductListComponent = undefined;

  product : Product ;

  ngOnInit(){
   this.product = this.productListComp.selectedProduct;
  }
}
