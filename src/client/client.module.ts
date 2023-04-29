import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { PrismaService } from 'src/prisma.service';
import { ClientRepository } from './client.repository';

@Module({
  controllers: [ClientController],
  providers: [ClientService, ClientRepository, PrismaService],
})
export class ClientModule {}
