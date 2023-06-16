import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { User } from './models/users/user.entity';

import { AuthenticationModule } from './modules/authentication/authentication.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthenticationMiddleware } from './middleware/authentication/authentication.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [User],
      synchronize: process.env.NODE_ENV === 'development',
    }),
    AuthenticationModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes('authentication');
  }
}
