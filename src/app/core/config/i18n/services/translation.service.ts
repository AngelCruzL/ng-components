import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  static SUPPORTED_LANGUAGES = ['en', 'es'];
  static DEFAULT_TRANSLATION_LANGUAGE = 'en';

  static HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
  }

  static detectLanguage(): string {
    const language = navigator.language.split('-')[0];

    // return 'es';
    return TranslationService.SUPPORTED_LANGUAGES.includes(language)
      ? language
      : TranslationService.DEFAULT_TRANSLATION_LANGUAGE;
  }
}
