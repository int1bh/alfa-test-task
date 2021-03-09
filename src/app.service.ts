import { AppController } from './app.controller';
import { Injectable, Controller, Get } from '@nestjs/common';
import { send } from 'process';
import { from } from 'rxjs';

@Injectable()
export class AppService {
    getHello() {
        return 'Главная страница'
    }

    
}
