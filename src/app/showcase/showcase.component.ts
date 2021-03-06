// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-showcase',
//   templateUrl: './showcase.component.html',
//   styleUrls: ['./showcase.component.css']
// })
// export class ShowcaseComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model'
import { CartService } from '../cart.service';

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  @Input() products: Product[]

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
  }
}
