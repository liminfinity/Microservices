import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CONSUMER_PATTERNS, CONSUMER_SERVICE } from './app.constants';
import { HelloDto } from './app.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject(CONSUMER_SERVICE) private readonly consumerService: ClientRMQ,
  ) {}

  async getHello(): Promise<string> {
    const message: HelloDto = {
      text: 'Sending from producer',
    };
    return await lastValueFrom(
      this.consumerService.emit(CONSUMER_PATTERNS.get('hello'), message),
    );
  }
}
