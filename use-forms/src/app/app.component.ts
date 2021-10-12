import { Person } from './models/person.model';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  personFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  personToEdit: Person = { fullName: 'David Cohen', age: 99, isAdmin: false };


  validateIsEven(control: AbstractControl): ValidationErrors | null {
    let number = +control.value;
    if (number % 2 === 0) {
      return null; // no errors!
    }

    return { "HaveToEven": { currentValue: number } };
  }


  ngOnInit(): void {
    this.personFormGroup = this.formBuilder.group(
      {
        fullName: [this.personToEdit.fullName, [Validators.required, Validators.maxLength(15)]],
        age: [this.personToEdit.age, [Validators.max(140), Validators.required, this.validateIsEven]],
        isAdmin: [this.personToEdit.isAdmin]
      }
    );

    this.personFormGroup.valueChanges.pipe(filter(x => this.personFormGroup.valid), debounceTime(1000)).subscribe(value => {
      console.log('OnValueChanges', value);
      this.save();
    });
  }

  getErrorsRules(errorList: any) {
    return Object.keys(errorList);
  }

  save() {
    this.personToEdit = this.personFormGroup.value;
    // post / put to server
  }

}
