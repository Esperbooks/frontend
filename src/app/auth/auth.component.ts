import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, } from '@angular/forms';

@Component({
  selector: 'eb-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  authType!: 'login' | 'signup';
  constructor(
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.route.data.subscribe((value) => {
      this.authType = value['auth_type'];
    })
  }


  ngOnDestroy(): void {
  }
}
