import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { Constants } from './constants';
import { ConfigModule } from '@nestjs/config';
import { QuestionsModule } from './questions/questions.module';
import { AttemptsModule } from './attempts/attempts.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: Constants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    QuestionsModule,
    AttemptsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
