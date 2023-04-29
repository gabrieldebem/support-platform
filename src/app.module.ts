import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [UsersModule, AuthModule, ClientModule, TicketModule],
  providers: [PrismaService],
})
export class AppModule {}
