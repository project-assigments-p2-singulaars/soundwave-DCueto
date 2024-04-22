import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-footer-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './footer-menu-item.component.html',
  styleUrl: './footer-menu-item.component.scss'
})
export class FooterMenuItemComponent {
  @Input() itemText!: string;
  @Input() itemLink!: string;
}
