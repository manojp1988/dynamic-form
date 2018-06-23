import { Component, OnInit } from '@angular/core';
import { FieldTypeEnum } from './input-group/field-type.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface FormElement {
  fieldType: string;
  fieldDescription: string;
  formControlName?: string;
  options?: Array<any>;
  isError?: boolean;
  isRequired?: boolean;
  errorMessage?: { [key: string]: string };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  sampleFormGroup: FormGroup;
  formElements: FormElement[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.sampleFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      country: '',
      gender: '',
      isMajor: false
    });

    this.formElements = [
      {
        fieldType: FieldTypeEnum.TEXT,
        fieldDescription: 'Name',
        formControlName: 'name',
        isRequired: true,
        errorMessage: {
          required: 'Name is required',
          minlength: 'Minimum Lenght is 3'
        }
      },
      {
        fieldType: FieldTypeEnum.TEXT,
        fieldDescription: 'Email',
        formControlName: 'email',
        isRequired: true,
        errorMessage: {
          required: 'Email is required',
          email: 'Invalid email',
          minlength: 'Minimum Lenght is 3'
        }
      },
      {
        fieldType: FieldTypeEnum.SELECT,
        options: ['Option 1', 'Option 2', 'Option 3'],
        fieldDescription: 'List of countries',
        formControlName: 'country'
      },
      {
        fieldType: FieldTypeEnum.RADIO,
        options: ['Male', 'Female'],
        fieldDescription: 'Gender',
        formControlName: 'gender'
      },
      {
        fieldType: FieldTypeEnum.CHECKBOX,
        fieldDescription: 'Above 18?',
        formControlName: 'isMajor'
      }
    ];
  }

  checkIfError(formControlName: string) {
    return (
      (this.sampleFormGroup.get(formControlName).touched ||
        this.sampleFormGroup.get(formControlName).dirty) &&
      this.sampleFormGroup.get(formControlName).invalid
    );
  }

  getErrorMessage(element: FormElement) {
    const errors = this.sampleFormGroup.get(element.formControlName).errors;
    if (errors) {
      return Object.keys(errors).map(key => element['errorMessage'][key]);
    } else {
      return null;
    }
  }

  trackByFun(index: number, element: FormElement) {
    return element.formControlName;
  }
}
