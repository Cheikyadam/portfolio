import { Component } from '@angular/core';
import { ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent } from "@coreui/angular";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionBriefcase, ionBusiness, ionCalendar, ionOpenOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-experiences',
  imports: [ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, NgIcon],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
  viewProviders: [provideIcons({ ionCalendar, ionBusiness, ionOpenOutline, ionBriefcase })]

})
export class Experiences {

}
