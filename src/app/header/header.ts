import { Component } from '@angular/core';
import {
  CollapseDirective,
  NavbarBrandDirective,
  NavbarComponent,
  NavbarNavComponent,
  NavbarTogglerDirective,
  NavItemComponent,
  NavLinkDirective, 
} from '@coreui/angular';

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

}
