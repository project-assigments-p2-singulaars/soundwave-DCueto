import { Component } from '@angular/core';
import { FooterMenuComponent } from '../footer-menu/footer-menu.component';
import { FooterSocialsComponent } from '../footer-socials/footer-socials.component';

@Component({
  selector: 'sw-main-footer',
  standalone: true,
  imports: [FooterMenuComponent, FooterSocialsComponent],
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.scss'
})
export class MainFooterComponent {

}
