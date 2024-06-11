import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [QuestionsService, PrismaService],
  controllers: [QuestionsController],
})
export class QuestionsModule {}
