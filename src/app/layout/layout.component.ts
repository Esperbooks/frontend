import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
  hideSubmenu = true;
  routeIndex!: number;
  currentSidebarIndex!: number;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const url = this.router.url;
    this.getCurrentSidebarNavigation(url);

    this.router.events.subscribe(val => {
      const change = val instanceof NavigationEnd

      if (change) {
        this.getCurrentSidebarNavigation(this.router.url);
      }

    })
  }

  toggleSubMenu(index: number) {
    this.sidebarNavigation[index].hideSubmenu = !this.sidebarNavigation[index].hideSubmenu;
  }

  sanitizeSvg(svg: any) {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  getCurrentSidebarNavigation(url: string) {
    const allRoutes = NavigationData.map(i => i.url);

    console.log({ allRoutes })

    const route: string | any = _.get(url.split('/'), '[1]');

    this.routeIndex = _.findIndex(allRoutes, (url: string) => url.includes(route));

    this.sidebarNavigation = NavigationData[this.routeIndex]?.sidebarMenu as SidebarmenuInterface[] || [];
    this.adminSidebarNavigation = NavigationData[this.routeIndex]?.adminSidebarMenu as SidebarmenuInterface[] || [];

    this.sidebarNavigation = this.sidebarNavigation?.map(data => {
      return { ...data, ...{ hideSubmenu: true } }
    })

    const sidebarRoute: string | any = _.get(url.split('/'), '[2]')

    console.log(this.sidebarNavigation);

    if (this.sidebarNavigation.length > 0) {
      const sidebarUrls: string[] = this.sidebarNavigation.map(x => x?.url) as string[];

      console.log({ sidebarUrls })

      this.currentSidebarIndex = _.findIndex(sidebarUrls, (url: string) => url.includes(sidebarRoute))

      console.log(this.currentSidebarIndex)

      const currentSideBar = this.sidebarNavigation[this.currentSidebarIndex];

      if (currentSideBar?.subMenu && currentSideBar.subMenu.length > 0) {
        this.toggleSubMenu(this.currentSidebarIndex)
      }
    }



    // if (this.sidebarNavigation?.length > 0) {
    //   console.log('Current Route', _.get(url.split('/'), '[2]'))
    // }

  }

  getParentMenu(nav: SidebarmenuInterface) {
    console.log(nav)
  }
}
