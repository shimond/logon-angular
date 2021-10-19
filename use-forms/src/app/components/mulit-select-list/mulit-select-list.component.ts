import { ControlValueAccessor, FormArray, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { startWith, tap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-mulit-select-list',
  templateUrl: './mulit-select-list.component.html',
  styleUrls: ['./mulit-select-list.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MulitSelectListComponent),
    multi: true
  }]
})
export class MulitSelectListComponent implements OnInit, ControlValueAccessor {

  private onChangeCallBack: any;
  private lastValueFromOutsideChanged = new BehaviorSubject<string[]>([]);
  @Input() header = '';
  options: string[] = [];
  arrayValues!: FormArray;
  selectAllControl = new FormControl(false);

  get selectedValues() {
    const selected = [];
    for (let index = 0; index < this.arrayValues.controls.length; index++) {
      if (this.arrayValues.controls[index].value) {
        selected.push(this.options[index]);
      }
    }
    return selected;
  }

  get controls() {
    return this.arrayValues.controls.map(x => x as FormControl);
  }

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.arrayValues = new FormArray([]);
    const hobbies$ = this.listService.getHobbies();
    const valueChangedFromOutside$ = this.lastValueFromOutsideChanged;
    combineLatest([hobbies$, valueChangedFromOutside$]).pipe(
      withLatestFrom(this.selectAllControl.valueChanges.pipe(startWith(false))))
      .subscribe(([[fullHobbiesList, needToSelectItems], selectAll]) => {
        this.initArray(fullHobbiesList);
        this.options = fullHobbiesList;
        if (!selectAll) {
          for (const item of needToSelectItems) {
            const indexToSetTrue = this.options.indexOf(item);
            this.arrayValues.controls[indexToSetTrue].setValue(true);
          }
        } else {
          for (const item of fullHobbiesList) {
            const indexToSetTrue = this.options.indexOf(item);
            this.arrayValues.controls[indexToSetTrue].setValue(true);
          }
        }
      });

    this.arrayValues.valueChanges.subscribe(selectedValues => {
      if (this.onChangeCallBack) {
        this.onChangeCallBack(this.selectedValues);
      }
    });

    combineLatest([hobbies$, this.selectAllControl.valueChanges]).subscribe(([fullHobbies, needToSelect]) => {
      for (const item of fullHobbies) {
        const indexToSetTrue = this.options.indexOf(item);
        this.arrayValues.controls[indexToSetTrue]?.setValue(needToSelect);
      }
    });
  }

  initArray(options: string[]) {
    this.arrayValues.clear();
    for (let index = 0; index < options.length; index++) {
      this.arrayValues.push(new FormControl(false));
    }
  }


  writeValue(obj: string[]): void {
    this.lastValueFromOutsideChanged.next(obj);
  }

  registerOnChange(fn: any): void {
    this.onChangeCallBack = fn;
  }

  registerOnTouched(fn: any): void {
  }


}
