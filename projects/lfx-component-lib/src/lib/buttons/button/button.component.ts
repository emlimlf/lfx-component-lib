import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export type IType = 'primary' | 'secondary';

@Component({
  selector: 'lfx-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  text = input<string>('Button');
  type = input<IType>('primary');
  clicked = output();

  onClick() {
    this.clicked.emit();
  }
}
