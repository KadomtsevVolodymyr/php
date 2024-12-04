import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routeTransitionAnimations } from '../../animations/route-transition.animation';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  animations: [routeTransitionAnimations]
})
export class MainComponent {

}
