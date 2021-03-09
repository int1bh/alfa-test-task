import { send } from 'process';
import { Controller, Get, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import path = require('path')

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
}
