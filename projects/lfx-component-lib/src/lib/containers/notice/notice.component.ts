import { Component, input } from '@angular/core';

type IType = 'info' | 'warning' | 'success' | 'error';
@Component({
  selector: 'lfx-notice',
  standalone: true,
  imports: [],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss',
})
export class NoticeComponent {
  type = input<IType>('info');
}
