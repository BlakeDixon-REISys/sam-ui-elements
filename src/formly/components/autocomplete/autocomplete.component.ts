import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import {
  SamAutocompleteComponent,
  AutocompleteService
} from '../../../ui-kit/sam-ui-elements.module';

import { AbstractSamFormly } from '../../sam-formly';

@Component({
 template: `
   <sam-autocomplete [formControl]="formControl"
    [control]="formControl"
   ></sam-autocomplete>
 `,
 changeDetection: ChangeDetectionStrategy.OnPush
})
export class SamFormlyAutocomplete extends AbstractSamFormly {
  @ViewChild(SamAutocompleteComponent)
  public template: SamAutocompleteComponent;

  constructor (_cdr: ChangeDetectorRef) {
    super();
    this.cdr = _cdr;
  }
}

