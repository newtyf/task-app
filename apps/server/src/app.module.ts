import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { AuthenticationMiddleware } from './middleware/authentication/authentication.middleware';

@Module({
  imports: [AuthenticationModule, TasksModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes('authentication');
  }
}
