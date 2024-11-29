import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { CONSUMER_PATTERNS } from './app.constants';
import { HelloDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern(CONSUMER_PATTERNS.get('hello'))
  async getHello(data: HelloDto): Promise<void> {
    return this.appService.getHello(data);
  }
}
