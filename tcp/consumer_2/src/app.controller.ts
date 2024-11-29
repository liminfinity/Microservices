import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CONSUMER_PATTERNS } from './app.constants';
import { HelloDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(CONSUMER_PATTERNS.get('hello'))
  async getHello(data: HelloDto): Promise<HelloDto>  {
    return this.appService.getHello(data);
  }
}
