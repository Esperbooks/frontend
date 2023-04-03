import { Component } from '@angular/core';
import { NavigationData } from '../data';

@Component({
  selector: 'eb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  authType = 'admin'
  navigation = NavigationData
}
