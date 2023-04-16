import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UserRepository,
    private prisma: PrismaService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const password = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.usersRepository.create({
      username: createUserDto.username,
      password,
    });

    return user;
  }

  async findAll(where?: any) {
    const users = await this.usersRepository.findMany({ where });
    // const users = await this.prisma.user.findMany({ where });

    return users;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.find({ id });

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.update({ id }, updateUserDto);

    return user;
  }

  async remove(id: number) {
    await this.usersRepository.delete({ id });
  }
}
