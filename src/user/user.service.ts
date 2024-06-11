import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async createUser(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
    });
  }
  async getUsers() {
    const user = await this.prisma.user.findMany({
      include: {
        attempts: true,
      },
    });
    if (user.length) {
      const { password, ...result } = user[0];
      return result;
    }
  }
  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        attempts: true,
      },
    });
  }
}
