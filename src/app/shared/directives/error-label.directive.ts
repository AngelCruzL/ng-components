import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[error-label]',
  standalone: true,
})
export class ErrorLabelDirective {
  #htmlElement!: ElementRef<HTMLElement>;
  #errors?: ValidationErrors | null;
  #isTouched = false;
  #labelErrorField!: string;
  #color = 'red';

  constructor(private el: ElementRef<HTMLElement>) {
    this.#htmlElement = el;
    this.#htmlElement.nativeElement.textContent = '';
    this.#htmlElement.nativeElement.classList.add('error-label');
  }

  @Input({ required: true }) set errors(
    errors: ValidationErrors | null | undefined,
  ) {
    this.#errors = errors;
    this.setLabelError();
  }

  @Input({ required: true }) set isTouched(isTouched: boolean) {
    this.#isTouched = isTouched;
    this.setLabelError();
  }

  @Input({ required: true }) set labelErrorField(labelErrorField: string) {
    this.#labelErrorField = labelErrorField;
  }

  setLabelError() {
    if (!this.#errors) {
      this.#htmlElement.nativeElement.textContent = '';
      return;
    }

    const errors = Object.keys(this.#errors);

    if (this.#isTouched && errors.includes('required')) {
      this.#htmlElement.nativeElement.textContent = `El campo ${
        this.#labelErrorField
      } es requerido`;
      this.#htmlElement.nativeElement.style.color = this.#color;
      return;
    }

    if (this.#isTouched && errors.includes('minlength')) {
      const minLength = this.#errors['minlength']['requiredLength'];
      const currentLength = this.#errors['minlength']['actualLength'];

      this.#htmlElement.nativeElement.textContent = `El campo debe tener al menos ${minLength} caracteres, actualmente tiene ${currentLength} caracteres`;
      this.#htmlElement.nativeElement.style.color = this.#color;
      return;
    }

    if (this.#isTouched && errors.includes('email')) {
      this.#htmlElement.nativeElement.textContent = `El campo debe ser un correo electrónico`;
      this.#htmlElement.nativeElement.style.color = this.#color;
      return;
    }

    // This code is executed if the input is an email input,
    // and does not have the email validator, but has the pattern validator
    if (
      this.#labelErrorField === 'email' &&
      this.#isTouched &&
      errors.includes('pattern')
    ) {
      this.#htmlElement.nativeElement.textContent = `El campo debe ser un correo electrónico válido`;
      this.#htmlElement.nativeElement.style.color = this.#color;
      return;
    }

    // This code is executed if the input is a password input,
    // and does not have the minlength validator, but has the pattern validator
    if (
      this.#labelErrorField === 'password' &&
      this.#isTouched &&
      errors.includes('pattern')
    ) {
      this.#htmlElement.nativeElement.textContent = `La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número`;
      this.#htmlElement.nativeElement.style.color = this.#color;
      return;
    }
  }
}
