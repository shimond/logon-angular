import { Person } from './models/person.model';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { merge, combineLatest } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  personFormGroup!: FormGroup;

  get addressGroups(): FormGroup[] {
    const array = this.personFormGroup.controls.addresses as FormArray;
    return array.controls.map(x => x as FormGroup);
  }

  constructor(private formBuilder: FormBuilder) {

  }

  personToEdit: Person = { hobbies:['C#', 'Java'], fullName: 'David Cohen', age: 99, isAdmin: false, addresses: [{ city: 'Jerusalem', country: 'Israel' }, { city: 'Eilat', country: 'Israel' },], adminName: 'MyAdminName' };

  createAddress() {
    return this.formBuilder.group({
      city: [null],
      country: [null, [Validators.required]]
    })
  }
  addAddress() {
    const array = this.personFormGroup.controls.addresses as FormArray;
    array.push(this.createAddress());
  }

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
        hobbies:[[]],
        fullName: [null, [Validators.required, Validators.maxLength(15)]],
        age: [null, [Validators.max(140), Validators.required, this.validateIsEven]],
        isAdmin: [null],
        addresses: this.formBuilder.array([]),
        adminName: [null, [Validators.maxLength(23)]]
      }
    );

    this.personFormGroup.controls.isAdmin.valueChanges.subscribe(isAdmin => {
      if (isAdmin) {
        this.personFormGroup.controls.adminName.enable();
      } else {
        this.personFormGroup.controls.adminName.disable();
      }
    });


    combineLatest([this.personFormGroup.controls.fullName.valueChanges, this.personFormGroup.controls.age.valueChanges]).subscribe(x => {
    })

    this.personFormGroup.valueChanges.pipe(filter(x => this.personFormGroup.valid), debounceTime(1000)).subscribe(value => {
      this.save();
    });

    this.fillAddress(this.personToEdit.addresses.length);
    this.personFormGroup.patchValue(this.personToEdit);
    
    // setTimeout(() => {
    //   this.personFormGroup.controls.hobbies.setValue(['Basketball', 'Swimming']);
    // }, 10000);
  }

  removeAddress(idxToRemove: number) {
    const array = this.personFormGroup.controls.addresses as FormArray;
    array.removeAt(idxToRemove);
  }

  fillAddress(length: number) {
    for (let index = 0; index < length; index++) {
      this.addAddress();
    }
  }

  getErrorsRules(errorList: any) {
    return Object.keys(errorList);
  }

  save() {
    this.personToEdit = this.personFormGroup.value;
    // post / put to server
  }

}
