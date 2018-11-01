import {
  Component,
  ChangeDetectionStrategy,
  ViewChild, ChangeDetectorRef
} from '@angular/core';
import {SamRadioButtonComponent} from '../../../ui-kit/sam-ui-elements.module';
import {AbstractSamFormly} from '../../sam-formly';

@Component({
  template: `
    <sam-radio-button
      [formControl]="formControl"
      [control]="formControl">
    </sam-radio-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SamFormlyRadio extends AbstractSamFormly {
  @ViewChild(SamRadioButtonComponent)
  public template: SamRadioButtonComponent;

  public cdr: ChangeDetectorRef;

  constructor (_cdr: ChangeDetectorRef) {
    super();
    this.cdr = _cdr;
  }
}
