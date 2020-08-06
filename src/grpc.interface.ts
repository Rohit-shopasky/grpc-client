import { Observable } from 'rxjs';

export interface IGrpcService {
    getHello(greetMsg: MsgData): Observable<any>;
}

interface MsgData {
  data: string;
}
