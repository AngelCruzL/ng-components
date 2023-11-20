import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { TranslationService } from '@core/config/i18n';
import buttonEnTranslations from '@i18n/en/buttons.json';
import buttonEsTranslations from '@i18n/es/buttons.json';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './button.component.html',
  providers: [TranslateService],
})
export class ButtonComponent implements OnInit {
  /**
   * Defines the label of the button
   */
  @Input({ required: true }) labelKey!: string;

  /**
   * Defines the size of the button
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Defines the html type of the button
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Defines the variant of the button
   */
  @Input() variant: 'accent' | 'primary' = 'primary';

  /**
   * Whether the button is disabled or not
   */
  @Input({ required: true }) disabled = true;

  /**
   * Optional click handler
   */
  @Output() onClick = new EventEmitter<any>();

  @Input() additionalClasses = '';

  #translateService = inject(TranslateService);

  ngOnInit(): void {
    const defaultLanguage = TranslationService.detectLanguage();
    this.#translateService.use(defaultLanguage);
    this.#translateService.setTranslation('en', buttonEnTranslations);
    this.#translateService.setTranslation('es', buttonEsTranslations);
  }

  /**
   * Handles the click event of the button
   * @param event
   */
  onClickButton(event: any) {
    this.onClick.emit(event);
  }
}
