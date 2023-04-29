import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) { }

  @UseGuards(AuthGuard)
  @Get()
  async find(@Request() req: any) {
    return this.clientService.findBy(req.query);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createClientDto: CreateClientDto, @Request() req: any) {
    const { name, email } = createClientDto
    return this.clientService.create(
      name,
      email,
      req.user.id
    );
  }
}
