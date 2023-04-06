import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';

import { NavigationData, SidebarmenuInterface } from '../shared/data';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'eb-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidebarNavigation!: SidebarmenuInterface[];
  adminSidebarNavigation!: SidebarmenuInterface[];

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getCurrentSidebarNavigation();
  }

  sanitizeSvg(svg: any) {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  getCurrentSidebarNavigation() {
    const url = this.router.url;
    const allRoutes = NavigationData.map(i => i.url);

    const route: string | any = _.get(url.split('/'), '[1]');

    const routeIndex = _.findIndex(allRoutes, (url: string) => url.includes(route));

    this.sidebarNavigation = NavigationData[routeIndex]?.sidebarMenu as SidebarmenuInterface[];
    this.adminSidebarNavigation = NavigationData[routeIndex]?.adminSidebarMenu as SidebarmenuInterface[];
  }
}
