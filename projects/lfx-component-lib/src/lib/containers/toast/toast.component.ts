import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IType = 'notice' | 'warning' | 'success' | 'error';

@Component({
  selector: 'lfx-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  type = input<IType>('notice');
}
