import { Component, Input, OnInit } from '@angular/core';
import { ContainerComponent, ColComponent, RowComponent, CardBodyComponent, CardComponent, CardHeaderComponent } from "@coreui/angular";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoLinkedin , ionMail, ionLogoGithub, ionLogoDiscord, ionCodeSlash, ionPerson, ionCall } from '@ng-icons/ionicons';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [ContainerComponent, ColComponent, RowComponent, NgIcon, CardBodyComponent, CardComponent, CardHeaderComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  viewProviders: [provideIcons({ ionLogoLinkedin, ionMail, ionLogoGithub , ionLogoDiscord, ionCodeSlash, ionPerson, ionCall })]
})
export class About {

  @Input() user!: User;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeHtml(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
