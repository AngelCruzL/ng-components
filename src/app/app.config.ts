import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TranslationService } from '@core/config/i18n';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: TranslationService.detectLanguage(),
        loader: {
          provide: TranslateLoader,
          useFactory: TranslationService.HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
  ],
};
