import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, projectsArray } from '../model/IProject';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {

  id: string
  project?: Project

  constructor(
    public activatedRoute: ActivatedRoute,
  ) {
    this.id = this.activatedRoute.snapshot.params['id']
    this.project = projectsArray.find((p) => p.id === this.id)
  }

  get formattedDescription() {
    if (!this.project?.description) {
      return '';
    }
    return this.project.description.split('\n').map(line => `<p>${line}</p>`).join('');
  }

}
