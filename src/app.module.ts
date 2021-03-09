import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopController } from './top/top.controller';
import { FullController } from './full/full.controller';
import { TopService } from './top/top.service';
import { FullService } from './full/full.service';

@Module({
  imports: [],
  controllers: [AppController, TopController, FullController],
  providers: [AppService, TopService, FullService],
})
export class AppModule {}
