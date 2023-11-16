import {
  booleanAttribute,
  Component,
  forwardRef,
  Input,
  Provider,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';

import { ErrorLabelDirective } from '@shared/directives/error-label.directive';

const CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ErrorLabelDirective],
  providers: [CONTROL_VALUE_ACCESSOR],
  templateUrl: './input.component.html',
})
export class InputComponent implements ControlValueAccessor {
  /**
   * Whether to show the label or not
   */
  @Input({ transform: booleanAttribute }) hasLabel = true;
  /**
   * The label to show if hasLabel is true, if not, this is used as aria-label
   */
  @Input({ required: true }) label!: string;
  /**
   * The placeholder to show in the input
   */
  @Input() placeholder = '';
  /**
   * The value of the input
   */
  @Input() value = '';
  /**
   * The HTML type of the input
   */
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  /**
   * Whether the input is readonly or not
   */
  @Input({ transform: booleanAttribute }) readonly = false;
  /**
   * The formControlName of the input to handle with reactive forms
   */
  @Input({ required: true }) name!: string;
  /**
   * Whether the input is required or not
   */
  @Input({ transform: booleanAttribute }) required = false;
  /**
   * The formGroup of the input to handle with reactive forms
   */
  @Input({ required: true }) formGroup!: FormGroup;
  /**
   * The errors of the input to handle with reactive forms
   */
  @Input({ required: true }) errors!: ValidationErrors | null;

  // @Input({ required: true }) isTouched!: boolean;

  @Input() additionalClasses = '';

  inputValue = '';
  #onChangeFn!: (value: string) => void;
  #onTouchFn!: () => void;

  onChange($event: any) {
    this.#onChangeFn($event.target.value);
  }

  onBlur(): void {
    this.#onTouchFn();
  }

  writeValue(value: string): void {
    this.inputValue = value;
  }

  registerOnChange(fn: () => void): void {
    this.#onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.#onTouchFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }
}
