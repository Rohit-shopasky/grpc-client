import { Controller, Get, Post,Logger,OnModuleInit, Query } from '@nestjs/common';
import { AppService } from './app.service';
import {Client,ClientGrpc} from '@nestjs/microservices';
import {IGrpcService} from './grpc.interface';
import {microserviceOptions} from './grpc.options';


@Controller()
export class AppController {
  private logger = new Logger('AppController');

  @Client(microserviceOptions)
  private client:ClientGrpc;

  private grpcService: IGrpcService;


  onModuleInit(){
    this.grpcService = this.client.getService<IGrpcService>('AppController')
  }

  @Get('greet')
  getHello(@Query() data): object {
    console.log(" query data",data);
    return this.grpcService.getHello({data:data.q});
  }
}
