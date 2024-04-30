import { Component } from '@angular/core';
import { MainNavComponent } from '../../components/main-nav/main-nav/main-nav.component';
import { JoinSectionComponent } from '../../components/join-section/join-section/join-section.component';

@Component({
  selector: 'sw-home-page',
  standalone: true,
  imports: [MainNavComponent, JoinSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  joinSection = {
    imagePath: '/assets/images/landing-page-girl.png',
    title: 'Feel The Music',
    body: 'Stream over 20 thousand songs with one click'
  }
}
