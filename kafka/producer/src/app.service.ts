import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CONSUMER_PATTERNS, CONSUMER_SERVICE } from './app.constants';
import { HelloDto } from './app.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject(CONSUMER_SERVICE) private readonly consumerService: ClientKafka,
  ) {}

  async getHello(): Promise<void> {
    const message = new HelloDto('Sending from producer');

    this.consumerService.emit(CONSUMER_PATTERNS.get('hello'), message);
  }
}
