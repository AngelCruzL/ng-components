import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  static emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static passwordPattern: string =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$';

  passwordsMatchValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const password = formGroup.get(controlName)?.value;
      const passwordConfirmation = formGroup.get(matchingControlName)?.value;

      if (password !== passwordConfirmation) {
        formGroup.get(matchingControlName)?.setErrors({ passwordsMatch: true });
        return { passwordsMatch: true };
      }

      formGroup.get(matchingControlName)?.setErrors(null);
      return null;
    };
  }
}
