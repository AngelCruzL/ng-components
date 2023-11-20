import { booleanAttribute, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { TranslationService } from '@core/config/i18n';
import errorLabelsEnTranslations from '@i18n/en/error-labels.json';
import errorLabelsEsTranslations from '@i18n/es/error-labels.json';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './select.component.html',
  providers: [TranslateService],
})
export class SelectComponent {
  /**
   * The label for the select component. If the hasLabel property is set to true, this label will be displayed, if not, it will be hidden and set into aria-label property for accessibility reasons.
   */
  @Input({ required: true }) label!: string;

  /**
   * The formControlName of the input to handle with reactive forms
   */
  @Input({ required: true }) formControlName!: string;

  /**
   * The formGroup of the input to handle with reactive forms
   */
  @Input({ required: true }) formGroup!: FormGroup;

  /**
   * This property is used to determine if the label should be displayed or not.
   */
  @Input() hasLabel: boolean = true;

  /**
   * The value of the input
   */
  @Input() value = '';

  /**
   * Whether the input is readonly or not
   */
  @Input({ transform: booleanAttribute }) readonly = false;

  /**
   * Whether the input is required or not
   */
  @Input({ transform: booleanAttribute }) required = false;

  /**
   * Additional classes to add to the input
   */
  @Input() additionalClasses = '';

  #translateService = inject(TranslateService);

  ngOnInit(): void {
    const defaultLanguage = TranslationService.detectLanguage();
    this.#translateService.use(defaultLanguage);
    this.#translateService.setTranslation('en', errorLabelsEnTranslations);
    this.#translateService.setTranslation('es', errorLabelsEsTranslations);
  }
}
