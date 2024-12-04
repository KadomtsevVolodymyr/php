import { Component, Input } from '@angular/core';
import { Product } from '../../state/products/product.model';
import { Router, RouterLink } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '*',
        opacity: 1
      })),
      state('closed', style({
        height: '0px',
        opacity: 0
      })),
      transition('closed => open', [
        animate('0.5s ease-in')
      ]),
      transition('open => closed', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class ProductItemComponent {
  @Input()
  product!: Product;
  isOpen = false;

  constructor(private router: Router) {}

  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  goToProduct(): void {
    this.router.navigate(['/products', this.product.id], { state: { data: this.product } });
  }
}
