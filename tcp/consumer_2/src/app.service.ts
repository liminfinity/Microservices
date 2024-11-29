import { Injectable } from '@nestjs/common';
import { HelloDto } from './app.dto';

@Injectable()
export class AppService {
  async getHello(data: HelloDto): Promise<HelloDto> {
    console.log(`Consumer 2 received: ${data.text}`);
    return {
      text: 'Hello from consumer 2!',
    };
  }
}
