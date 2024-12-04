import { Component } from '@angular/core';
import { routeTransitionAnimations } from '../../animations/route-transition.animation';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  animations: [routeTransitionAnimations]

})
export class ProfileComponent {

}
