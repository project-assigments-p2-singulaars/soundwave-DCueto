import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-footer-socials-item',
  standalone: true,
  imports: [],
  templateUrl: './footer-socials-item.component.html',
  styleUrl: './footer-socials-item.component.scss'
})
export class FooterSocialsItemComponent {
  @Input() itemText!: string;
  @Input() itemLink!: string;
  @Input() itemIcon!: string;
}
