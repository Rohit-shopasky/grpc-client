import { Controller,Logger,Get,Post,Req } from '@nestjs/common';
import {GetRandomService} from './getrandom.service';
import { Request } from 'express';


@Controller()
export class GetrandomController {

    private logger = new Logger('AppController');
    
    constructor(private readonly GetRandomService: GetRandomService) {}

    @Get('getrandom')
    getRandom(@Req() req: Request): object {
       
      return this.GetRandomService.getRandom(req.query);
    }
    

}
