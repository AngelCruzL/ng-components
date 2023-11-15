import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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

  ngOnInit(): void {
    this.profileForm = this.#formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: this.#formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
    });
  }

  onSubmit(): void {
    console.log(this.profileForm.value);
  }
}
