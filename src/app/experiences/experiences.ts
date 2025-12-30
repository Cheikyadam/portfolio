import { Component, Input } from '@angular/core';
import { ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent } from "@coreui/angular";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionBriefcase, ionBusiness, ionCalendar, ionOpenOutline } from '@ng-icons/ionicons';
import { Experience } from '../../models/experience';
import { RouterLink } from "@angular/router";
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-experiences',
  imports: [ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, NgIcon, DatePipe, NgClass],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
  viewProviders: [provideIcons({ ionCalendar, ionBusiness, ionOpenOutline, ionBriefcase })]

})
export class Experiences {

  @Input() experiences!:Experience[]
}
