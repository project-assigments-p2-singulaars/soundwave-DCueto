import { Component, Input } from '@angular/core';
import { SquareButtonComponent } from '../square-button/square-button.component';

@Component({
  selector: 'sw-discover-section',
  standalone: true,
  imports: [SquareButtonComponent],
  templateUrl: './discover-section.component.html',
  styleUrl: './discover-section.component.scss'
})
export class DiscoverSectionComponent {
  buttons = [
    { icon: 'icon-microphone', text: 'Charts' },
    { icon: 'icon-albums', text: 'Albums' },
    { icon: 'icon-more', text: 'More' }
  ]
  
  @Input() discoverImage!: string;
}
