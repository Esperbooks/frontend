import { Component } from '@angular/core';

@Component({
  selector: 'eb-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.scss']
})
export class BiodataComponent {
  checkBoxOptions = [
    {
      name: 'Biodata',
      checked: false
    },
    {
      name: 'HMO Enrollment',
      checked: false
    },
    {
      name: 'Induction Completed',
      checked: true
    },
    {
      name: 'Guarantor Checks',
      checked: false
    },
    {
      name: 'Work Station',
      checked: false
    },
    {
      name: 'License/Permit',
      checked: false
    },
    {
      name: 'Work ID Card',
      checked: false
    },
    {
      name: 'Software Access',
      checked: false
    },
  ]
}
