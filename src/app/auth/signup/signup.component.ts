import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'eb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.initializeLoginForm()
  }

  initializeLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: [' ', [Validators.email, Validators.required]],
      pasword: [' ', Validators.required],
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      panelClass: 'eb-dialog-container',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }
}
