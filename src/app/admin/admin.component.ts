import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, creator: string, goal: number, description: string, category: string) {
    const newProject: Project = new Project(name, creator, goal, description, category);
    console.log(newProject);
    this.projectService.addProject(newProject);
  }

}
