import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../shared/components/input/input.component';
import { ButtonComponent } from '../shared/components/button/button.component';

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
      firstName: [''],
      lastName: [''],
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
