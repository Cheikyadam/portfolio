import { Component } from '@angular/core';
import { ContainerComponent, ColComponent, RowComponent, CardBodyComponent, CardComponent, CardHeaderComponent } from "@coreui/angular";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoLinkedin , ionMail, ionLogoGithub, ionLogoDiscord, ionCodeSlash, ionPerson } from '@ng-icons/ionicons';

@Component({
  selector: 'app-about',
  imports: [ContainerComponent, ColComponent, RowComponent, NgIcon, CardBodyComponent, CardComponent, CardHeaderComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  viewProviders: [provideIcons({ ionLogoLinkedin, ionMail, ionLogoGithub , ionLogoDiscord, ionCodeSlash, ionPerson })]
})
export class About {

}
