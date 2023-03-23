import { Injectable } from '@angular/core';

@Injectable()
export class TagsService {
  private tags: Tag[] = [
    {
      input_tag: 'txt_name',
      predict: 'name',
    },
    {
      input_tag: 'ape_pat',
      predict: 'lastname',
    },
    {
      input_tag: 'ape_mat',
      predict: 'lastname',
    },
    {
      input_tag: 'anios',
      predict: 'age',
    },
    {
      input_tag: 'domicilio',
      predict: 'user',
    },
    {
      input_tag: 'e-mail',
      predict: 'mail',
    },
    {
      input_tag: 'celular',
      predict: 'phone',
    },
  ];
  constructor() {}

  getTags() {
    return this.tags;
  }
}

export interface Tag {
  input_tag: string;
  predict: string;
}
