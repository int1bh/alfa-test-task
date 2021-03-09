import { TopService } from './top.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';


@Controller('api/top')
export class TopController {

  constructor(private readonly topServise: TopService) {

  }

  @Get()
  getTop() {
    return this.topServise.getTop()
  }

  }



