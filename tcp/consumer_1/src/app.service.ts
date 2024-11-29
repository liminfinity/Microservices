import { Inject, Injectable } from '@nestjs/common';
import { HelloDto } from './app.dto';
import { CONSUMER_PATTERNS, CONSUMER_SERVICE_3 } from './app.constants';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject(CONSUMER_SERVICE_3) private readonly client: ClientProxy) {}
  async getHello(data: HelloDto): Promise<HelloDto> {
    console.log(`Consumer 1 received: ${data.text}`);
    const message = { text: 'Sending from consumer 1' };

    const responses = await Promise.all([
      lastValueFrom(this.client.send<HelloDto>(CONSUMER_PATTERNS.get('hello'), message)),
      { text: 'Hello from consumer 1!' },
    ]);

    return {
      text: responses.map((response) => response.text).join('\n'),
    };
  }
}
