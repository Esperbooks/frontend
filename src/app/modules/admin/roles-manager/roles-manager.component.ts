import { Component } from '@angular/core';

@Component({
  selector: 'eb-roles-manager',
  templateUrl: './roles-manager.component.html',
  styleUrls: ['./roles-manager.component.scss']
})
export class RolesManagerComponent {
  availableRoles = [
    {
      name: 'Staff',
      assigned: false
    },
    {
      name: 'Personnel Manager',
      assigned: true
    },
    {
      name: 'Admin',
      assigned: false
    },
    {
      name: 'Super Admin',
      assigned: true
    },
    {
      name: 'Book Keeper',
      assigned: true
    },
    {
      name: 'Accountant',
      assigned: true
    },
  ]
  assignedRoles = [
    {
      name: 'Staff',
      assigned: true
    },
    {
      name: 'Admin',
      assigned: true
    },
  ]
}
