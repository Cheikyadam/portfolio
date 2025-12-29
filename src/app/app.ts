import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { About } from "./about/about";
import { RowComponent, ColComponent, ContainerComponent } from "@coreui/angular";
import { Experiences } from "./experiences/experiences";
import { Projects } from "./projects/projects";
import { Education } from "./education/education";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";
@Component({
  selector: 'app-root',
  imports: [Header, About, RowComponent, ColComponent, ContainerComponent, Experiences, Projects, Education, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
