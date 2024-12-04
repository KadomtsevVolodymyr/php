import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { products as productState} from '../../state/products/products.state';
import { Product } from '../../state/products/product.model';
import { routeTransitionAnimations } from '../../animations/route-transition.animation';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  animations: [routeTransitionAnimations]
})
export class ProductsComponent {
  public products: Product[] = productState
}
