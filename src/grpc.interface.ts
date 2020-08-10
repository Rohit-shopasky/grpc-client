import { Observable } from 'rxjs';

export interface IGrpcService {
    getHello(greetMsg: MsgData): Observable<any>;
    getRandom(userName:userName): Observable<any>;
}

interface MsgData {
  data: string;
}
interface userName {
    data: string;
  }
