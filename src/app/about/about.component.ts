import { Component } from '@angular/core';
import { routeTransitionAnimations } from '../../animations/route-transition.animation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [routeTransitionAnimations]
})
export class AboutComponent {

}
