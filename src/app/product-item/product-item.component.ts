import { Component, Input } from '@angular/core';
import { Product } from '../../state/products/product.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input()
  product!: Product;
  constructor(private router: Router) {

  }

  goToProduct(): void {
    console.log(this.product)
    this.router.navigate(['/products', this.product.id], { state: { data: this.product } })
  }
}
