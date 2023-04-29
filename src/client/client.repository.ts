import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { IBaseRepository, IFindMany } from "src/contracts/base.repository";
import { PrismaService } from "src/prisma.service";
import { Client } from "./entities/client.entity";

@Injectable()
export class ClientRepository implements IBaseRepository<Client> {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.ClientCreateInput): Promise<Client> {
    const client = await this.prisma.client.create({ data });

    return new Client(
      client.id,
      client.name,
      client.email,
      client.userId,
      client.createdAt,
      client.updatedAt,
    );
  }

  async find(where: Prisma.ClientWhereUniqueInput): Promise<Client | undefined> {
    const client = await this.prisma.client.findUnique({ where });

    if (!client) {
      return undefined;
    }

    return new Client(
      client.id,
      client.name,
      client.email,
      client.userId,
      client.createdAt,
      client.updatedAt,
    );
  }

  async findMany(params?: IFindMany): Promise<Client[] | undefined> {
    const clients = await this.prisma.client.findMany(params);

    return clients?.map(
      (client?) =>
        new Client(
          client?.id,
          client?.name,
          client?.email,
          client?.userId,
          client?.createdAt,
          client?.updatedAt,
        ),
    );
  }

  async update(
    where: Prisma.ClientWhereUniqueInput,
    data: Prisma.ClientUpdateInput,
  ): Promise<Client | undefined> {
    const client = await this.prisma.client.update({ where, data });

    return new Client(
      client.id,
      client.name,
      client.email,
      client.userId,
      client.createdAt,
      client.updatedAt,
    );
  }

  async delete(where: Prisma.ClientWhereUniqueInput): Promise<Client | undefined> {
    const client = await this.prisma.client.delete({ where });

    return new Client(
      client.id,
      client.name,
      client.email,
      client.userId,
      client.createdAt,
      client.updatedAt,
    );
  }
}
