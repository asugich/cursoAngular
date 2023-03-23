import { Component } from '@angular/core';
import { TagsService, Tag } from '../services/tags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  tags: Tag[] = [];

  constructor(private _tagsService: TagsService) {}

  ngOnInit() {
    this.tags = this._tagsService.getTags();
    console.log(this.tags);
  }
}
