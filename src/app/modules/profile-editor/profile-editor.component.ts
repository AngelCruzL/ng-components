import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  EmailValidatorService,
  ValidatorService,
} from '@core/services/validators';
import { ButtonComponent, InputComponent } from '@shared/components';

@Component({
  selector: 'profile-editor-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './profile-editor.component.html',
  styles: ``,
})
export class ProfileEditorComponent implements OnInit {
  profileForm!: FormGroup;
  #formBuilder = inject(FormBuilder);
  #validatorService = inject(ValidatorService);
  #emailValidatorService = inject(EmailValidatorService);

  ngOnInit(): void {
    this.profileForm = this.#formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(ValidatorService.emailPattern),
          ],
          // [this.#emailValidatorService],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(ValidatorService.passwordPattern),
          ],
        ],
        passwordConfirmation: ['', [Validators.required]],
      },
      {
        validators: [],
      },
    );
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    console.log(this.profileForm.value);
  }
}
