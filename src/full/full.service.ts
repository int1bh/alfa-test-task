import { Injectable } from '@nestjs/common';
import { sortedJson } from 'src/sort-json';

@Injectable()
export class FullService {
  json = sortedJson();

  getAll() {
    return this.json;
  }
}
