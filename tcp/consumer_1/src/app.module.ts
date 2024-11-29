import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CONSUMER_SERVICE_3 } from './app.constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: CONSUMER_SERVICE_3,
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3003,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
