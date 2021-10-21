import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanExit } from 'src/app/services/can-exit.interface';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit, CanExit {

  nameControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  canExit() {
    if (!this.nameControl.dirty) {
      return true;
    }
    return confirm('בטוח בטוח בטוח?');
  }

  save() {
    alert(this.nameControl.value);
  }

}
