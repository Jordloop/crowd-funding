import { Injectable } from '@angular/core';
import { Project } from './project.model';
//firebase database
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }
  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }
  addProject(newProject: Project) {
    this.projects.push(newProject);
  }
  updateProject(localUpdatedProject){
    var albumEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    albumEntryInFirebase.update({name: localUpdatedProject.name,
                                creator: localUpdatedProject.creator,
                                goal: localUpdatedProject.goal,
                                description: localUpdatedProject.description,
                                category: localUpdatedProject.category
                              });
  }
  deleteProject(localProjectToDelete){
    this.getProjectById(localProjectToDelete.$key).remove();
  }

  // fund(current, donation) {
  //   var currentBalance = this.getProjectById(localProjectToFund.$key);
  //   var parsedCurrent = parseInt(currentBalance.balance);
  //   var parsedDonation = parseInt(donation);
  //   var total = (parsedCurrent + parsedDonation);
  //
  //   currentBalance.update({
  //     balance: total
  //   });
  // }
  fund(currentProject, donation) {
    var parsedCurrent = Number(currentProject.balance);
    console.log(currentProject);
    var parsedDonation = Number(donation);
    console.log((parsedDonation))
    var total = (parsedCurrent + parsedDonation);
    console.log(typeof(total));
    var currentBalance = this.getProjectById(currentProject.$key);

    currentBalance.update({
      balance: total
    });
    //console.log(parsedCurrent)
  }
}
