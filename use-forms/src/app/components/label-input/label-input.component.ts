import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LabelInputComponent),
    multi: true
  }]
})
export class LabelInputComponent implements OnInit, ControlValueAccessor {

  control!: FormControl;
  @Input() label: string = '';
  fnChangedCallback: any;
  constructor() { }

  ngOnInit(): void {
    this.control = new FormControl('');
    this.control.valueChanges.subscribe(newValue => {
      if (this.fnChangedCallback) {
        this.fnChangedCallback(newValue);
      }
    });
  }

  writeValue(obj: any): void {
    this.control.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.fnChangedCallback = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

}
