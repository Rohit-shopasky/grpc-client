import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(data): object {
    return {greet:"Hello from App " +data};
  }
}
