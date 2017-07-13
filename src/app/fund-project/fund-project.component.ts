import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-fund-project',
  templateUrl: './fund-project.component.html',
  styleUrls: ['./fund-project.component.css'],
  providers: [ProjectService]
})
export class FundProjectComponent implements OnInit {
  @Input() projectToDisplay;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  beginFund(donation){
    console.log(donation);
    // if(confirm("Are you sure you want to have less money?")){
      this.projectService.fund(this.projectToDisplay, donation);
    // }
  }

}
