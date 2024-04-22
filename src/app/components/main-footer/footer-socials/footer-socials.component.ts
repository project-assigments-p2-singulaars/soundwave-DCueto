import { Component } from '@angular/core';
import { FooterSocialsItemComponent } from '../footer-socials-item/footer-socials-item.component';

@Component({
  selector: 'sw-footer-socials',
  standalone: true,
  imports: [FooterSocialsItemComponent],
  templateUrl: './footer-socials.component.html',
  styleUrl: './footer-socials.component.scss'
})
export class FooterSocialsComponent {
  socialItems = [
    { itemText: 'Twitter', itemLink: '', itemIcon: 'fa-brands fa-twitter' },
    { itemText: 'Facebook', itemLink: '', itemIcon: 'fa-brands fa-square-facebook' },
  ]
}
