import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import {
  CONSUMER_PATTERNS,
  CONSUMER_SERVICE_1,
  CONSUMER_SERVICE_2,
} from './app.constants';
import { HelloDto } from './app.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject(CONSUMER_SERVICE_1) private readonly client1: ClientProxy,
    @Inject(CONSUMER_SERVICE_2) private readonly client2: ClientProxy,
  ) {}

  async getHello(): Promise<string> {
    const message = { text: 'Sending from producer' };
    const responses = await Promise.all([
      lastValueFrom(
        this.client1.send<HelloDto>(CONSUMER_PATTERNS.get('hello'), message),
      ),
      lastValueFrom(
        this.client2.send<HelloDto>(CONSUMER_PATTERNS.get('hello'), message),
      ),
    ]);
    return responses.map((response) => response.text).join('\n');
  }
}
