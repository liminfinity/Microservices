import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CONSUMER_SERVICE_1, CONSUMER_SERVICE_2 } from './app.constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: CONSUMER_SERVICE_1,
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
      {
        name: CONSUMER_SERVICE_2,
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
