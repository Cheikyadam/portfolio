import { Component, Input } from '@angular/core';
import { ContainerComponent, RowComponent, ColComponent, BadgeComponent, CardComponent, CardBodyComponent } from "@coreui/angular";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { ionCodeSlash, ionEye, ionOpenOutline } from '@ng-icons/ionicons';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  imports: [ContainerComponent, RowComponent, ColComponent, BadgeComponent, NgIcon, CardComponent, CardBodyComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  viewProviders: [provideIcons({ ionCodeSlash, ionEye, ionOpenOutline })]

})
export class Projects {

  @Input() projects!:Project[]
}
