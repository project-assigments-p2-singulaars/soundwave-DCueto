import { Component } from '@angular/core';
import { MainNavComponent } from '../../components/main-nav/main-nav/main-nav.component';
import { MainFooterComponent } from '../../components/main-footer/main-footer/main-footer.component';
import { SignupFormComponent } from '../../components/signup-form/signup-form/signup-form.component';

@Component({
  selector: 'sw-join-page',
  standalone: true,
  imports: [MainNavComponent, MainFooterComponent, SignupFormComponent],
  templateUrl: './join-page.component.html',
  styleUrl: './join-page.component.scss'
})
export class JoinPageComponent {

}
