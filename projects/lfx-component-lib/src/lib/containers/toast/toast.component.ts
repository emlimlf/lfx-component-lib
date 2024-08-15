import { Component, input } from '@angular/core';

type IType = 'notice' | 'warning' | 'success' | 'error';
@Component({
  selector: 'lfx-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  type = input<IType>('notice');
}
