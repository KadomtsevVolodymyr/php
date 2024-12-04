import { Component } from '@angular/core';
import { routeTransitionAnimations } from '../../animations/route-transition.animation';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  animations: [routeTransitionAnimations]
})
export class ContactsComponent {

}
