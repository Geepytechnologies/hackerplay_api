import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AttemptsService } from './attempts.service';
import { CreateAttemptDto } from 'dto';

@Controller('api/attempts')
export class AttemptsController {
  constructor(private readonly attemptService: AttemptsService) {}

  @Post('/')
  async createAttempt(@Body() createAttemptDto: CreateAttemptDto) {
    return this.attemptService.createAttempt(createAttemptDto);
  }

  @Get('/')
  async getAttempts() {
    return this.attemptService.getAttempts();
  }
  @Get('/user/:id')
  async getAttemptsByUser(@Param('id', ParseIntPipe) id: number) {
    return this.attemptService.getAttemptsByUser(id);
  }
}
