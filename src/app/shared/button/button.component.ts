import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  /**
   * Defines the label of the button
   */
  @Input({ required: true }) label = 'Button';

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
   * Optional click handler
   */
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event: any) {
    this.onClick.emit(event);
  }
}
