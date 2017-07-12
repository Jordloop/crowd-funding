import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Pipe({
  name: 'category',
  pure: false
})

export class CategoryFilterPipe implements PipeTransform {

  transform(input: Project[], desiredCategory) {
    if(desiredCategory === 'tech') {
      return input.filter(project => project.category === 'Tech');
    } else if(desiredCategory === 'people') {
      return input.filter(project => project.category === 'People');
    } else if(desiredCategory === 'games') {
      return input.filter(project => project.category === 'Games/Toys');
    } else if(desiredCategory === 'allProjects'){
      console.log(input);
      return input;
    }
  }

}
