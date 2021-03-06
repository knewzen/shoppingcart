import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InlineSVGModule } from 'ng-inline-svg';
import { TranslateModule } from '@ngx-translate/core';

import { SegmentedModule } from '../segmented';
import { DateModule } from '../date';
import { DatepickerModule } from '../datepicker';
import { DirectivesModule } from '../directives';
import { FormFieldComponent } from './form-field.component';
import { FormFieldsComponent } from './form-fields.component';
import { FormFieldPopoverComponent } from './form-field-popover/form-field-popover.component';
import { FormFieldDropdownComponent } from './form-field-dropdown/form-field-dropdown.component';
import { FormFieldDatepickerComponent } from './form-field-datepicker/form-field-datepicker.component';
import { FormFieldDaterangeComponent } from './form-field-daterange/form-field-daterange.component';
import { FormFieldDaterangeDateComponent } from './form-field-daterange/form-field-daterange-date/form-field-daterange-date.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InlineSVGModule,
    TranslateModule.forChild(),
    SegmentedModule,
    DateModule,
    DatepickerModule,
    DirectivesModule,
  ],
  exports: [
    FormFieldComponent,
    FormFieldsComponent,
    FormFieldPopoverComponent,
    FormFieldDropdownComponent,
    FormFieldDatepickerComponent,
    FormFieldDaterangeComponent,
  ],
  declarations: [
    FormFieldComponent,
    FormFieldsComponent,
    FormFieldPopoverComponent,
    FormFieldDropdownComponent,
    FormFieldDatepickerComponent,
    FormFieldDaterangeComponent,
    FormFieldDaterangeDateComponent,
  ]
})
export class FormFieldsModule { }
