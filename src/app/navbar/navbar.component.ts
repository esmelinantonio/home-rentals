import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (item of Menu; track $index) {
        <li><a>{{item.label}}</a></li>
      }
    </ul>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
 @Input() Menu!: {label: string}[]
}
