import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FieldTypeEnum } from './field-type.enum';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputGroupComponent),
      multi: true
    }
  ]
})
export class InputGroupComponent implements OnInit, ControlValueAccessor {
  @Input() fieldType: string;
  @Input() fieldDescription: string;
  @Input() formControlName: string;
  @Input() errorMessages: string[];
  @Input() isRequired: boolean;
  @Input() isError: boolean;
  @Input() options: Array<any>;

  disabled: boolean;
  value: any;

  onChange = (value: any) => {};
  onTouched = () => {};

  constructor() {}

  ngOnInit() {}

  onFieldChange(value) {
    this.onTouched();
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
    this.disabled = isDisabled;
  }
}
