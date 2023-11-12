import { booleanAttribute, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  /**
   * Whether to show the label or not
   */
  @Input({ transform: booleanAttribute }) hasLabel = true;
  /**
   * The label to show if hasLabel is true, if not, this is used as aria-label
   */
  @Input({ required: true }) label!: string;
  /**
   * The placeholder to show in the input
   */
  @Input() placeholder = '';
  /**
   * The value of the input
   */
  @Input() value = '';
  /**
   * The HTML type of the input
   */
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  /**
   * Whether the input is readonly or not
   */
  @Input({ transform: booleanAttribute }) readonly = false;
  /**
   * The name of the input
   */
  @Input({ required: true }) name!: string;
  /**
   * Whether the input is required or not
   */
  @Input({ transform: booleanAttribute }) required = false;
}
