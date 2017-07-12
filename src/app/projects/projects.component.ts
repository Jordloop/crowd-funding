import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  filterByCategory: string = 'allProjects';

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  onChange(filterOption) {
    this.filterByCategory = filterOption;
  }

  goToDetailPage(clickedProject) {
  this.router.navigate(['projects', clickedProject.$key]);
};
}
