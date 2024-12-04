import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from '../animations/route-transition.animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeTransitionAnimations]

})
export class AppComponent {
  title = 'angular-project';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
