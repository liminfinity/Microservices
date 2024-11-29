import { Injectable } from '@nestjs/common';
import { HelloDto } from './app.dto';

@Injectable()
export class AppService {
  async getHello(data: HelloDto): Promise<HelloDto> {
    console.log(`Consumer 3 received: ${data.text}`);
    return {
      text: 'Hello from consumer 3!',
    };
  }
}
