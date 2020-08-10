import { Injectable,Req,OnModuleInit,Logger } from '@nestjs/common';
import { Request } from 'express';
import {Client,ClientGrpc} from '@nestjs/microservices';
import {IGrpcService} from '../grpc.interface';
import {microserviceOptions} from '../grpc.options';


@Injectable()
export class GetRandomService {

    @Client(microserviceOptions)
  private client:ClientGrpc;

  private grpcService: IGrpcService;


  onModuleInit(){
    this.grpcService = this.client.getService<IGrpcService>('GetrandomController')
  }

    getRandom(data): object {
       
        return this.grpcService.getRandom({data:data.q});
      }
}
