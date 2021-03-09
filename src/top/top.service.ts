import { Injectable } from '@nestjs/common';
import { sortedJson } from 'src/sort-json';

@Injectable()
export class TopService {
  json = sortedJson();

  getTop() {
    return this.json.slice(0, 14);
  }
}
