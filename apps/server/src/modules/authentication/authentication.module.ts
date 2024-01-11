import { Module, Logger, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { RegisterMiddleware } from './middleware/reigster.middleware';
import { User } from 'src/models/users/user.entity';
import { LoginMiddleware } from './middleware/login.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, Logger],
})
export class AuthenticationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(RegisterMiddleware).forRoutes('authentication/register');
    // consumer.apply(LoginMiddleware).forRoutes('authentication/login');
  }
}
