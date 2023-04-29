import { Injectable } from '@nestjs/common';
import { ClientRepository } from './client.repository';

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository) { }

  async findBy(where: any) {
    return await this.clientRepository.findMany({ where: where })
  }

  async create(name: string, email: string, userId: number) {
    console.log(userId)
    return await this.clientRepository.create({
      name: name,
      email: email,
      user: {
        connect: {
          id: userId
        }
      }
    })
  }
}

