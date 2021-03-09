import { FullService } from './full.service';
import { Controller, Get } from '@nestjs/common';

@Controller('api/full')
export class FullController {
  constructor(private readonly fullServise: FullService) {}

  @Get()
  getAll() {
    return this.fullServise.getAll();
  }
}
