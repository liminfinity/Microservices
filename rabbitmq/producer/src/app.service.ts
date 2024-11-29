import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CONSUMER_PATTERNS, RABBITMQ_SERVICE } from './app.constants';
import { HelloDto } from './app.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject(RABBITMQ_SERVICE) private readonly rabbitMq: ClientProxy,
  ) {}

  async getHello(): Promise<string> {
    const message: HelloDto = {
      text: 'Sending from producer',
    };

    return await lastValueFrom(
      this.rabbitMq.emit(CONSUMER_PATTERNS.get('hello'), message),
    );
  }
}
