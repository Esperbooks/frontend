import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'eb-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>
  ) { }

  closeDialog() {
    this.dialogRef.close()
  }

}
