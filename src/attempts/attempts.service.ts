import { Injectable } from '@nestjs/common';
import { CreateAttemptDto } from 'dto';
import { PrismaService } from 'src/prisma.service';
import { Encryption } from 'utils/encryption';

@Injectable()
export class AttemptsService {
  constructor(private prisma: PrismaService) {}
  async createAttempt(data: any) {
    const attempt = await this.prisma.attempts.create({
      data: {
        input: data.input,
        output: data.output,
        result: data.result,
        status: data.status,
        userId: data.userId,
        questionId: data.questionId,
      },
    });
    return attempt;
  }
  async getAttempts() {
    const attempts = await this.prisma.attempts.findMany();
    return attempts;
  }
  async getAttemptsByUser(id: any) {
    const attempts = await this.prisma.attempts.findMany({
      where: {
        userId: id,
      },
    });
    return attempts;
  }
}
