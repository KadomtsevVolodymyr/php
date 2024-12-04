import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../state/products/product.model';
import { routeTransitionAnimations } from '../../animations/route-transition.animation';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  animations: [routeTransitionAnimations]
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.product = history.state['data'];
  }

}
