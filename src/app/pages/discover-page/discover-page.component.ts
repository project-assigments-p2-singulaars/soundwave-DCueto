import { Component } from '@angular/core';
import { MainNavComponent } from '../../components/main-nav/main-nav/main-nav.component';
import { DiscoverSectionComponent } from '../../components/discover-section/discover-section/discover-section.component';
import { MainFooterComponent } from '../../components/main-footer/main-footer/main-footer.component';

@Component({
  selector: 'sw-discover-page',
  standalone: true,
  imports: [MainNavComponent, DiscoverSectionComponent, MainFooterComponent],
  templateUrl: './discover-page.component.html',
  styleUrl: './discover-page.component.scss'
})
export class DiscoverPageComponent {
  discoverSectionImage = './../../../assets/images/covers.jpg';
}
