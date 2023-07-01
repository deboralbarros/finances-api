import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUser } from './interfaces';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  createUser(user: CreateUser): Promise<User> {
    return this.prisma.user.create({
      data: user,
    });
  }
}
