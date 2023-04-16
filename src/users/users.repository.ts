import { Injectable } from '@nestjs/common';
import { Prisma, User as PrismaUser } from '@prisma/client';
import { IFindMany } from 'src/contracts/base.repository';
import { PrismaService } from 'src/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = await this.prisma.user.create({ data });

    return new User(
      user.id,
      user.username,
      user.password,
      user.createdAt,
      user.updatedAt,
    );
  }

  async find(where: Prisma.UserWhereUniqueInput): Promise<User | undefined> {
    const user = await this.prisma.user.findUnique({ where });

    if (!user) {
      return undefined;
    }

    return new User(
      user?.id,
      user?.username,
      user?.password,
      user?.createdAt,
      user?.updatedAt,
    );
  }

  async findMany(params?: IFindMany): Promise<User[] | undefined> {
    const users = await this.prisma.user.findMany(params);

    return users.map(
      (user?: PrismaUser) =>
        new User(
          user?.id,
          user?.username,
          user?.password,
          user?.createdAt,
          user?.updatedAt,
        ),
    );
  }

  async update(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<User | undefined> {
    const user = await this.prisma.user.update({ where, data });

    return new User(
      user?.id,
      user?.username,
      user?.password,
      user?.createdAt,
      user?.updatedAt,
    );
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<User | undefined> {
    const user = await this.prisma.user.delete({ where });

    return new User(
      user?.id,
      user?.username,
      user?.password,
      user?.createdAt,
      user?.updatedAt,
    );
  }
}
