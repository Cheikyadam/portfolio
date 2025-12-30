import { Component, Input } from '@angular/core';
import { ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent } from "@coreui/angular";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionBusiness, ionCalendar, ionCheckmarkCircle, ionDocumentText, ionOpenOutline, ionRibbon, ionSchool } from '@ng-icons/ionicons';
import { Formation } from '../../models/formation';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, DatePipe, NgIcon, NgClass],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  viewProviders: [provideIcons({ ionCalendar, ionBusiness, ionOpenOutline, ionSchool, ionDocumentText, ionCheckmarkCircle, ionRibbon })]
})
export class Education {

  @Input() formations!:Formation[]
}
