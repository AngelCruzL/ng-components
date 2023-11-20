import { inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  readonly #http = inject(HttpClient);
  readonly #apiUrl = '';

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    return this.#http
      .get<any>(`${this.#apiUrl}/${email}`)
      .pipe(map(res => (res?.length === 0 ? null : { emailTaken: true })));
  }
}
