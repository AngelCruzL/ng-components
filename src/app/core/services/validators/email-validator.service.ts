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

    // Implement your own API logic here, the return value must be an Observable
    // that emits null if the email is not taken, or an object with the emailTaken
    // you just need to change the evaluation of the response to match your API
    return this.#http
      .get<any>(`${this.#apiUrl}/${email}`)
      .pipe(map(res => (res?.length === 0 ? null : { emailTaken: true })));
  }
}
