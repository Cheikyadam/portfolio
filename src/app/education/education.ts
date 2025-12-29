import { Component } from '@angular/core';
import { ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent } from "@coreui/angular";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionBusiness, ionCalendar, ionCheckmarkCircle, ionDocumentText, ionOpenOutline, ionRibbon, ionSchool } from '@ng-icons/ionicons';

@Component({
  selector: 'app-education',
  imports: [ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, NgIcon],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  viewProviders: [provideIcons({ ionCalendar, ionBusiness, ionOpenOutline, ionSchool, ionDocumentText, ionCheckmarkCircle, ionRibbon })]
})
export class Education {

}
