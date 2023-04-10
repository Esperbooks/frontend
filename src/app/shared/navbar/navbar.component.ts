import { Component, OnInit } from '@angular/core';
import { NavigationData } from '../data';
import { NavigationEnd, Router } from '@angular/router';

import * as _ from 'lodash';


@Component({
  selector: 'eb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  authType = 'admin'
  navigation = NavigationData;
  routeIndex!: number;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.getCurrentRouteIndex(this.router.url)

    this.router.events.subscribe(val => {
      const change = val instanceof NavigationEnd

      if (change) {
        this.getCurrentRouteIndex(this.router.url)
      }

    })
  }

  getCurrentRouteIndex(url: string) {
    const route: string | any = _.get(url.split('/'), '[1]');

    const allRoutes = NavigationData.map(i => i.url);

    this.routeIndex = _.findIndex(allRoutes, (url: string) => url.includes(route));
  }
}
