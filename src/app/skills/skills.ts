import { Component } from '@angular/core';
import { ContainerComponent, RowComponent, ColComponent, BadgeComponent, CardComponent, CardBodyComponent } from "@coreui/angular";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { ionCloudUpload, ionCodeSlash, ionConstruct, ionLayersOutline, ionLogoHtml5, ionPersonCircle, ionServer } from '@ng-icons/ionicons';

@Component({
  selector: 'app-skills',
  imports: [ContainerComponent, RowComponent, ColComponent, BadgeComponent, NgIcon, CardComponent, CardBodyComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  viewProviders: [provideIcons({ ionCodeSlash, ionLogoHtml5, ionServer, ionCloudUpload, ionConstruct, ionPersonCircle, ionLayersOutline  })]

})
export class Skills {

}
