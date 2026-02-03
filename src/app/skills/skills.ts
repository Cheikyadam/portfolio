import { Component, Input } from '@angular/core';
import { ContainerComponent, RowComponent, ColComponent, BadgeComponent, CardComponent, CardBodyComponent } from "@coreui/angular";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { ionCloudUpload, ionCodeSlash, ionConstruct, ionLayersOutline, ionLogoHtml5, ionPersonCircle, ionServer } from '@ng-icons/ionicons';
import { User } from '../../models/user';

@Component({
  selector: 'app-skills',
  imports: [ContainerComponent, RowComponent, ColComponent, BadgeComponent, NgIconComponent, CardComponent, CardBodyComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  viewProviders: [provideIcons({ ionCodeSlash, ionLogoHtml5, ionServer, ionCloudUpload, ionConstruct, ionPersonCircle, ionLayersOutline  })]

})
export class Skills {

  @Input() user!: User;
}
