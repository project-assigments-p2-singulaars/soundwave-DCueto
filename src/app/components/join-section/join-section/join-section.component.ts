import { Component, Input } from '@angular/core';
import { JoinButtonComponent } from '../join-button/join-button.component';

@Component({
  selector: 'sw-join-section',
  standalone: true,
  imports: [JoinButtonComponent],
  templateUrl: './join-section.component.html',
  styleUrl: './join-section.component.scss'
})
export class JoinSectionComponent {
  @Input() title!: string;
  @Input() imagePath!: string;
  @Input() body!: string;

  joinButtonRoute: string = '/join';
  joinButtonText: string = 'Join Now';
}
