import { Injectable } from '@nestjs/common';
import { HelloDto } from './app.dto';

@Injectable()
export class AppService {
  async getHello(data: HelloDto): Promise<void> {
    console.log(`Consumer 1 received: ${data.text}`);
  }
}
