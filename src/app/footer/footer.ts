import { Component, Input } from '@angular/core';
import { ContainerComponent, RowComponent, ColComponent, FooterComponent } from "@coreui/angular";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { ionCall, ionLogoDiscord, ionLogoGithub, ionLogoLinkedin, ionMail } from '@ng-icons/ionicons';
import { User } from '../../models/user';

@Component({
  selector: 'app-footer',
  imports: [ContainerComponent, RowComponent, ColComponent, NgIcon, FooterComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  viewProviders: [provideIcons({ ionLogoLinkedin, ionMail, ionLogoGithub , ionLogoDiscord, ionCall })]

})

export class Footer {
  @Input() user!:User
}
