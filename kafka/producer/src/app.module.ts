import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CONSUMER_SERVICE } from './app.constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: CONSUMER_SERVICE,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'consumer',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'consumer-group',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
