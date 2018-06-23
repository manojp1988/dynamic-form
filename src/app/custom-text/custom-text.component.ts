import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTextComponent),
      multi: true
    }
  ]
})
export class CustomTextComponent implements OnInit, ControlValueAccessor {
  
  // Function to call when the rating changes.
  onChange = (value: string) => {};

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {};

  constructor() { }

  ngOnInit() {
  }

  onValueChange(value){
    this.writeValue(value);
  }

  writeValue(obj: any): void {
    this.onChange(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }
}
