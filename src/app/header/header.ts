import { Component, Input } from '@angular/core';
import {
  CollapseDirective,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarNavComponent,
  NavbarTogglerDirective,
  NavItemComponent,
  NavLinkDirective, 
} from '@coreui/angular';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  imports: [
    NavbarComponent,
    NavbarBrandDirective,
    NavbarTogglerDirective,
    CollapseDirective,
    NavbarNavComponent,
    NavItemComponent,
    NavLinkDirective,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  
  @Input() user!: User;
}
