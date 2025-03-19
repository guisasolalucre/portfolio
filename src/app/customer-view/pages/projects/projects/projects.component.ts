import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project, projectsArray } from '../model/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = projectsArray

  constructor(
    private router: Router,
  ){}

  goToDetail(id: string): void {
    this.router.navigate(
      [
        'home',
        'projects',
        id,
      ],
    );
  }
  
}
