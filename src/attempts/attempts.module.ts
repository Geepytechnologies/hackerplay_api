import { Module } from '@nestjs/common';
import { AttemptsService } from './attempts.service';
import { AttemptsController } from './attempts.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AttemptsService, PrismaService],
  controllers: [AttemptsController],
})
export class AttemptsModule {}
