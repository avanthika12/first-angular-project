import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedProduct : Product;
   products = [
    {
      "id":1,
      "name": "Shirt",
      "description":"Checked shirt for men",
      "brand":"Zudio",
      "gender":"Men",
      "category":"Clothing",
      "color":["Red","Black","Blue"],
      "price":300,
      "size":[28,30,32],
      "is_in_inventory":true,
      "discountPrice":250,
      "imageURL":"https://images.bestsellerclothing.in/data/JJ/15-nov-2023/237138002_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
  
    },
    {
      "id": 2,
      "name": "Flyknit Dress",
      "description": "Summer dress for women",
      "brand": "Forever 21",
      "gender": "Women",
      "category": "Clothing",
      "color": ["Red", "Yellow","Pink"],
      "price": 400,
      "size":[10,12,14],
      "is_in_inventory": true,
      "imageURL": "https://m.media-amazon.com/images/I/71NTjFMM+XL._SX679_.jpg"
    },
    {
      "id": 3,
      "name": "Sweater",
      "description": "Woolen sweater for men",
      "brand": "Tommy Hilfiger",
      "gender": "Men",
      "category": "Clothing",
      "color": ["Gray,Purple"],
      "price": 350,
      "is_in_inventory": true,
      "imageURL": "https://royk.com/bilder/artiklar/zoom/11001201_r_1.jpg?m=1647363066"
    },
    {
      "id": 4,
      "name": "Shorts",
      "description": "Casual shorts for men",
      "brand": "Adidas",
      "gender": "Men",
      "category": "Clothing",
      "color": ["Black", "White","Green"],
      "price": 250,
      "size":[22,24,26],
      "discountPrice":180,
      "is_in_inventory": true,
      "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNDE4g_1R2PdKdLMCl2MwqaCYINr_oy2nSw&s"
    },
    {
      "id": 5,
      "name": "Joggers",
      "description": "Comfortable joggers for women",
      "brand": "Nike",
      "gender": "Women",
      "category": "Clothing",
      "color": ["Gray","Black","Blue","Green"],
      "price": 330,
      "discountPrice":277,
      "size":[42,44,46],
      "is_in_inventory": true,
      "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVd7zeG5ooqLmCGkAI3UlX1tktuSuSchL9tw&s"
    },
    {
      "id": 6,
      "name": "Tank Top",
      "description": "Sleeveless tank top for women",
      "brand": "Puma",
      "gender": "Women",
      "category": "Clothing",
      "color": ["Pink","Yellow","Orange"],
      "price": 500,
      "size":[10,12,14],
      "discountPrice":450,
      "is_in_inventory": false,
      "imageURL": "https://assets.ajio.com/medias/sys_master/root/20230629/ALws/649cf461eebac147fc36dd83/-473Wx593H-466122304-white-MODEL.jpg"
    },
    {
      "id": 7,
      "name": "Blazer",
      "description": "Formal blazer for men",
      "brand": "Calvin Klein",
      "gender": "Men",
      "category": "Clothing",
      "color": ["Blue,Black,Green"],
      "price": 800,
      "size":[28,30,32],
      "is_in_inventory": true,
      "imageURL": "https://5.imimg.com/data5/XL/RY/MY-63369146/mens-black-blazer.jpg"
    },
    {
      "id": 8,
      "name": "Scarf",
      "description": "Woolen scarf for women",
      "brand": "Burberry",
      "gender": "Women",
      "category": "Accessories",
      "color": ["Red", "Black"],
      "price": 150,
      "size":[12],
      "is_in_inventory": true,
      "imageURL": "https://3.imimg.com/data3/SE/WQ/MY-3734722/wool-scarf.png"
    },
    {
      "id": 9,
      "name": "Sneakers",
      "description": "Running sneakers for men",
      "brand": "Reebok",
      "gender": "Men",
      "category": "Footwear",
      "color": ["White", "Blue","Red","Green"],
      "price": 1500,
      "discountPrice":1230,
      "size":[6,7,8,9],
      "is_in_inventory": false,
      "imageURL": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/21725622/2023/7/11/4b35dcc6-8d20-4e46-a5f8-53cde3f384741689078273510-Red-Tape-Men-Mesh-Sneakers-3221689078273173-1.jpg"
    },
  ]
  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter(p => p.is_in_inventory ===true).length;
  totalProductOutOfStock = this.products.filter(p => p.is_in_inventory ===false).length;

  selectedFilterRadioButton: string = "all";
  onFilterChanged(value:string){
    this.selectedFilterRadioButton = value;
  }
  @Input()
  searchText:string = ' ';


}
